import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetRepository } from './respository/Pet.repository';
import { Pet } from './schema/Pet.schema';
export declare class PetsService {
    private petRepository;
    constructor(petRepository: PetRepository);
    createPet(data: CreatePetDto): Promise<Pet>;
    getAllPets(): Promise<Pet[]>;
    updatePet(petId: string, data: UpdatePetDto): Promise<Pet>;
    deletePet(id: string): Promise<void>;
    getPetById(id: string): Promise<Pet>;
}
