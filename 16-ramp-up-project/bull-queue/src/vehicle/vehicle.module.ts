import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleProcessor } from './vehicle.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'vehicle',
    }),
  ],
  controllers: [VehicleController],
  providers: [VehicleProcessor]
})
export class VehicleModule { }
