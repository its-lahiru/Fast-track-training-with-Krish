import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetsService } from './pets.service';
import { Pet } from './schema/Pet.schema';
export declare class PetsController {
    private petsService;
    constructor(petsService: PetsService);
    getAllPets(): Promise<Pet[]>;
    createPet(data: CreatePetDto): Promise<Pet>;
    updatePet(id: string, data: UpdatePetDto): Promise<Pet>;
    deletePet(id: string): Promise<void>;
    getPetById(id: string): Promise<Pet>;
}
