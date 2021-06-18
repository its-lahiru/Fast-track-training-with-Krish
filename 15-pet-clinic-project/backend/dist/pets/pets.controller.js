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
const create_pet_dto_1 = require("./dto/create-pet.dto");
const update_pet_dto_1 = require("./dto/update-pet.dto");
const pets_service_1 = require("./pets.service");
let PetsController = class PetsController {
    constructor(petsService) {
        this.petsService = petsService;
    }
    async getAllPets() {
        return await this.petsService.getAllPets();
    }
    async createPet(data) {
        return await this.petsService.createPet(data);
    }
    async updatePet(id, data) {
        return await this.petsService.updatePet(id, data);
    }
    async deletePet(id) {
        return await this.petsService.deletePet(id);
    }
    async getPetById(id) {
        return await this.petsService.getPetById(id);
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
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_dto_1.CreatePetDto]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "createPet", null);
__decorate([
    common_1.Patch('api/pets/:id'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pet_dto_1.UpdatePetDto]),
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