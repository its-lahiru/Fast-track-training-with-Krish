import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MulterModule } from '@nestjs/platform-express';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './files'
    }),
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
