import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetRepository } from './respository/Pet.repository';
import { MongooseModule } from '@nestjs/mongoose';

import { Pet, PetSchema } from './schema/Pet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]),
  ],
  controllers: [PetsController],
  providers: [PetsService, PetRepository]
})
export class PetsModule { }
