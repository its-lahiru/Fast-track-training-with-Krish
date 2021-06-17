import { PetsService } from './pets.service';
import { Pet } from './schema/Pet.schema';
export declare class PetsController {
    private petsService;
    constructor(petsService: PetsService);
    getAllPets(): Promise<Pet[]>;
    createPet(name: string, age: number, weight: number): Promise<Pet>;
    updatePet(id: string, name: string, age: number, weight: number): Promise<Pet>;
    deletePet(id: string): Promise<void>;
    getPetById(id: string): Promise<Pet>;
}
