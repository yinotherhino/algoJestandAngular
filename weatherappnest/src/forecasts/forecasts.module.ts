import { Module } from '@nestjs/common';
import { ForecastsService } from './forecasts.service';
import { ForecastsController } from './forecasts.controller';
import { forecastProviders } from './forecasts.provider';

@Module({
  providers: [ForecastsService, ...forecastProviders],
  controllers: [ForecastsController],
})
export class ForecastsModule {}
