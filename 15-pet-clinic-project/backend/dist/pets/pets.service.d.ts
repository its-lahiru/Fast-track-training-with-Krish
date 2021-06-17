import { PetRepository } from './respository/Pet.repository';
import { Pet } from './schema/Pet.schema';
export declare class PetsService {
    private petRepository;
    constructor(petRepository: PetRepository);
    createPet(name: string, age: number, weight: number): Promise<Pet>;
    getAllPets(): Promise<Pet[]>;
    updatePet(petId: string, name: string, age: number, weight: number): Promise<Pet>;
    deletePet(id: string): Promise<void>;
    getPetById(id: string): Promise<Pet>;
}
