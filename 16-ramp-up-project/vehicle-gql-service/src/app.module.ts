import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CarModule } from './car/Car.module';

@Module({
  imports: [
    CarModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
