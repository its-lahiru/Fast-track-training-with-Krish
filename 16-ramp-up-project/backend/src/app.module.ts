import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    VehiclesModule,
    EventEmitterModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
