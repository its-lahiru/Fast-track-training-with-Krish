import { Injectable } from '@nestjs/common';
import { PetRepository } from './respository/Pet.repository';
import { Pet } from './schema/Pet.schema';

@Injectable()
export class PetsService {
    constructor(private petRepository: PetRepository) { }

    async createPet(name: string, age: number, weight: number): Promise<Pet> {
        return await this.petRepository.create(name, age, weight);
    }

    async getAllPets(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }

    async updatePet(petId: string, name: string, age: number, weight: number): Promise<Pet> {
        return await this.petRepository.update(petId, name, age, weight);
    }

    async deletePet(id: string): Promise<void> {
        return await this.petRepository.delete(id);
    }

    async getPetById(id: string): Promise<Pet> {
        return await this.petRepository.findById(id);
    }
}
