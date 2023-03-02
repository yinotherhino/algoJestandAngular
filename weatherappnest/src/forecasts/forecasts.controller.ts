import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ForecastsTable } from './forecasts.entity';
import { ForecastsService } from './forecasts.service';

@Controller('api/v1/forecasts')
export class ForecastsController {
  constructor(private readonly forecastService: ForecastsService) { }
  @Get()
  async getAllForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastService.getAllForecasts();
  }
  @Get('hot')
  async getHotForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastService.getHotForecasts();
  }
  @Get('rainy')
  async getRainyForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastService.getRainyForecasts();
  }
  @Get('popular')
  async getPopularForecasts(): Promise<ForecastsTable[]> {
    return await this.forecastService.getPopularForecasts();
  }
  @Get(':date')
  async getForecastsByDate(@Param('date') date: string): Promise<ForecastsTable[]> {
    return await this.forecastService.getForecastsByDate(date);
  }

  // @Post()
  // async createForecast(@Body() forecast: ForecastsTable): Promise<ForecastsTable> {

  //   return await this.forecastService.createForecast(forecast);
  // };
}
