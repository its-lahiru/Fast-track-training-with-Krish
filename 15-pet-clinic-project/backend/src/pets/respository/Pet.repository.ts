import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v1 as uuid } from 'uuid';
import { Pet, PetDocument } from '../schema/Pet.schema';

@Injectable()
export class PetRepository {
    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

    async create(name: string, age: number, weight: number): Promise<Pet> {
        const newPet = new this.petModel({
            id: uuid(),
            name: name,
            age: age,
            weight: weight,
        });
        if (newPet) {
            return await newPet.save();
        }
        throw new BadRequestException('Pet creation is failed..');
    }

    async findAll(): Promise<Pet[]> {
        const pets = await this.petModel.find();

        if (pets) {
            return pets.map((pet) => ({
                id: pet.id,
                name: pet.name,
                age: pet.age,
                weight: pet.weight,
            }));
        }
        throw new NotFoundException('Pets are not found..');
    }

    async update(petId: string, name: string, age: number, weight: number): Promise<Pet> {
        const pet = await this.petModel.findOne({ id: petId });
        if (pet) {
            if (name) {
                pet.name = name;
            }
            if (age) {
                pet.age = age;
            }
            if (weight) {
                pet.weight = weight;
            }
            return pet.save();
        }
        throw new NotFoundException('Pet is not found.. Update failed!');
    }

    async delete(id: string): Promise<void> {
        const result = await this.petModel.deleteOne({ id: id });
        if (result.n === 0) {
            throw new NotFoundException('Pet not found... Deletion failed!');
        }
    }

    async findById(id: string): Promise<Pet> {
        const pet = this.petModel.findOne({ id: id });
        if (pet) {
            return pet;
        }
        throw new NotFoundException('Pet is not found!');
    }
}
