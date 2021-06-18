import { Model } from 'mongoose';
import { CreatePetDto } from '../dto/create-pet.dto';
import { UpdatePetDto } from '../dto/update-pet.dto';
import { Pet, PetDocument } from '../schema/Pet.schema';
export declare class PetRepository {
    private petModel;
    constructor(petModel: Model<PetDocument>);
    create(data: CreatePetDto): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    update(petId: string, data: UpdatePetDto): Promise<Pet>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Pet>;
}
