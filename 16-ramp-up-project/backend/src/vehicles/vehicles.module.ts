import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleConsumer } from 'src/consumer/vehicle.consumer';
import { Vehicle } from 'src/entity/vehicle.entity';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    MulterModule.register({
      dest: './src/resources/static/assets/uploads'
    }),
    BullModule.registerQueue({
      name: 'vehicle',
    }),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehicleConsumer]
})
export class VehiclesModule { }
