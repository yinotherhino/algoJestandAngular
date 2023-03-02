import { FORECASTS_REPOSITORY } from 'src/config/constants';
import { ForecastsTable } from './forecasts.entity';

export const forecastProviders = [
  {
    provide: FORECASTS_REPOSITORY,
    useValue: ForecastsTable,
  },
];