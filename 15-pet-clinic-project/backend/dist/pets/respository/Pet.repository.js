"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
const Pet_schema_1 = require("../schema/Pet.schema");
let PetRepository = class PetRepository {
    constructor(petModel) {
        this.petModel = petModel;
    }
    async create(data) {
        const newPet = new this.petModel({
            id: uuid_1.v1(),
            name: data.name,
            age: data.age,
            weight: data.weight,
        });
        if (newPet) {
            return await newPet.save();
        }
        throw new common_1.BadRequestException('Pet creation is failed');
    }
    async findAll() {
        const pets = await this.petModel.find();
        if (pets) {
            return pets.map((pet) => ({
                id: pet.id,
                name: pet.name,
                age: pet.age,
                weight: pet.weight,
            }));
        }
        throw new common_1.NotFoundException('Pets are not found..');
    }
    async update(petId, data) {
        const pet = await this.petModel.findOne({ id: petId });
        if (pet) {
            if (data.name) {
                pet.name = data.name;
            }
            if (data.age) {
                pet.age = data.age;
            }
            if (data.weight) {
                pet.weight = data.weight;
            }
            return pet.save();
        }
        throw new common_1.NotFoundException('Pet is not found. Updating failed!');
    }
    async delete(id) {
        const result = await this.petModel.deleteOne({ id: id });
        if (result.n === 0) {
            throw new common_1.NotFoundException('Pet not found. Deletion failed!');
        }
    }
    async findById(id) {
        const pet = this.petModel.findOne({ id: id });
        if (pet) {
            return pet;
        }
        throw new common_1.NotFoundException('Pet is not found');
    }
};
PetRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Pet_schema_1.Pet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PetRepository);
exports.PetRepository = PetRepository;
//# sourceMappingURL=Pet.repository.js.map