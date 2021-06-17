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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const Pet_repository_1 = require("./respository/Pet.repository");
let PetsService = class PetsService {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }
    async createPet(name, age, weight) {
        return await this.petRepository.create(name, age, weight);
    }
    async getAllPets() {
        return await this.petRepository.findAll();
    }
    async updatePet(petId, name, age, weight) {
        return await this.petRepository.update(petId, name, age, weight);
    }
    async deletePet(id) {
        return await this.petRepository.delete(id);
    }
    async getPetById(id) {
        return await this.petRepository.findById(id);
    }
};
PetsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Pet_repository_1.PetRepository])
], PetsService);
exports.PetsService = PetsService;
//# sourceMappingURL=pets.service.js.map