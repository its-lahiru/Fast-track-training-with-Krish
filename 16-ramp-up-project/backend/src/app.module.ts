import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { VehicleConsumer } from './consumer/vehicle.consumer';
import { Vehicle } from './entity/vehicle.entity';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehiclesService } from './vehicles/vehicles.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'vehicle',
      entities: [Vehicle],
      synchronize: true,
      autoLoadEntities: true
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    VehiclesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
