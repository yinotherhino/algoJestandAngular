import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForecastsModule } from './forecasts/forecasts.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';
import Config from './config';

@Module({
  imports: [ForecastsModule, SequelizeModule.forRoot(Config.db), DatabaseModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
