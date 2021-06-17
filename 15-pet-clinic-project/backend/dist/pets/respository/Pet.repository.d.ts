import { Model } from 'mongoose';
import { Pet, PetDocument } from '../schema/Pet.schema';
export declare class PetRepository {
    private petModel;
    constructor(petModel: Model<PetDocument>);
    create(name: string, age: number, weight: number): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    update(petId: string, name: string, age: number, weight: number): Promise<Pet>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Pet>;
}
