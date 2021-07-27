import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarConsumer } from 'src/consumer/car.consumer';
import { Car } from 'src/entity/car.entity';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
    MulterModule.register({
      dest: './src/resources/static/assets/uploads'
    }),
    BullModule.registerQueue({
      name: 'car',
    }),
  ],
  controllers: [CarsController],
  providers: [CarsService, CarConsumer]
})
export class CarsModule { }
