import { Inject, Injectable } from '@nestjs/common';
import { ForecastsTable } from './forecasts.entity';
import { Op } from 'sequelize';

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
    return await this.forecastRepository.findAll({ limit: 3, order: [['temperatureC', 'DESC']] });
  }

  async getRainyForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll({ limit: 3, order: [['rainChance', 'DESC']] });
  }

  async getPopularForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastRepository.findAll({ where: { [Op.or]: [{ city: 'Lagos' }, { city: 'Abuja' }, { city: 'Ibadan' }] }, limit: 3 });
  }

  // async createForecast(forecast: ForecastsTable): Promise<ForecastsTable> {
  //   forecast.id = 23;
  //   return await this.forecastRepository.create(forecast);
  // }
}
