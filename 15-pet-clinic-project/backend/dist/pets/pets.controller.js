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
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const pets_service_1 = require("./pets.service");
let PetsController = class PetsController {
    constructor(petsService) {
        this.petsService = petsService;
    }
    async getAllPets() {
        try {
            return await this.petsService.getAllPets();
        }
        catch (error) {
            console.log('Pets retrieval is failed..');
            console.log(error);
        }
    }
    async createPet(name, age, weight) {
        try {
            return await this.petsService.createPet(name, age, weight);
        }
        catch (error) {
            console.log('Pet creation is failed..');
            console.log(error);
        }
    }
    async updatePet(id, name, age, weight) {
        try {
            return await this.petsService.updatePet(id, name, age, weight);
        }
        catch (error) {
            console.log(`Updating of pet with id=${id} is failed..`);
            console.log(error);
        }
    }
    async deletePet(id) {
        try {
            return await this.petsService.deletePet(id);
        }
        catch (error) {
            console.log(`Deletion of Pet with id=${id} is failed...`);
            console.log(error);
        }
    }
    async getPetById(id) {
        try {
            return await this.petsService.getPetById(id);
        }
        catch (error) {
            console.log(`Retrieving of Pet with id=${id} is failed...`);
            console.log(error);
        }
    }
};
__decorate([
    common_1.Get('api/pets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getAllPets", null);
__decorate([
    common_1.Post('api/pets'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('age')),
    __param(2, common_1.Body('weight')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "createPet", null);
__decorate([
    common_1.Patch('api/pets/:id'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('age')),
    __param(3, common_1.Body('weight')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "updatePet", null);
__decorate([
    common_1.Delete('api/pets/:id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "deletePet", null);
__decorate([
    common_1.Get('api/pets/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getPetById", null);
PetsController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsController);
exports.PetsController = PetsController;
//# sourceMappingURL=pets.controller.js.map