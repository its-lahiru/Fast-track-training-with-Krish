import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetRepository } from './respository/Pet.repository';
import { Pet } from './schema/Pet.schema';

@Injectable()
export class PetsService {
    constructor(private petRepository: PetRepository) { }

    async createPet(data:CreatePetDto): Promise<Pet> {
        return await this.petRepository.create(data);
    }

    async getAllPets(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }

    async updatePet(petId: string, data: UpdatePetDto): Promise<Pet> {
        return await this.petRepository.update(petId, data);
    }

    async deletePet(id: string): Promise<void> {
        return await this.petRepository.delete(id);
    }

    async getPetById(id: string): Promise<Pet> {
        return await this.petRepository.findById(id);
    }
}
