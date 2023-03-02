import { Sequelize } from 'sequelize-typescript';
import Config from '../config';
import { ForecastsTable } from '../forecasts/forecasts.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(Config.db);
      sequelize.addModels([ForecastsTable]);
      await sequelize.sync().then(() => {
        console.log('Database connection established');
        });
      return sequelize;
    },
  },
];