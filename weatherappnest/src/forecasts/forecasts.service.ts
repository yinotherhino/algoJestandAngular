import { Inject, Injectable } from '@nestjs/common';
import { ForecastsTable } from './forecasts.entity';
import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'
import { IWeather } from 'src/types/forecasts';

@Injectable()
export class ForecastsService {

  constructor(@Inject('FORECASTS_REPOSITORY')
  private forecastRepository: typeof ForecastsTable
  ) { }
  async getAllForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll();
  }

  async getForecastsByDate(date: string): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll({ where: { date: date } });
  }

  async getHotForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll({ where: { date: "2023-03-04" }, limit: 3, order: [['temperatureC', 'DESC']] });
  }

  async getRainyForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll({ where: { date: "2023-03-04" }, limit: 3, order: [['rainChance', 'DESC']] });
  }

  async getPopularForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll({ where: { [Op.or]: [{ city: 'Lagos' }, { city: 'Abuja' }, { city: 'Ibadan' }], [Op.and]: [{ date: "2023-03-04" }] }, limit: 3 });
  }

  async createForecasts(forecasts: ForecastsTable[]): Promise<ForecastsTable[]> {
    const promises = [];
    forecasts.forEach(forecast => {
      forecast.id = uuidv4();
      promises.push(this.forecastRepository.create({ ...forecast }))
    })


    return await Promise.all(promises)
  }
}
