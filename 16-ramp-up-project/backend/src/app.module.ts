import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcelFile } from './vehicles/excel-file.entity';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    VehiclesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'vehicle',
      entities: [ExcelFile],
      synchronize: true,
      autoLoadEntities: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
