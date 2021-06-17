import { Module } from '@nestjs/common';
import { PetsService } from './pets/pets.service';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECTION } from './app.properties';

@Module({
  imports: [
    PetsModule,
    MongooseModule.forRoot(DB_CONNECTION, { autoCreate: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
