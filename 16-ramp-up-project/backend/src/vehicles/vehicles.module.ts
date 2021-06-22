import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcelFile } from './excel-file.entity';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExcelFile]),
    ClientsModule.register([
      {
        name: 'VEHICLES_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        }
      },
    ]),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService]
})
export class VehiclesModule { }
