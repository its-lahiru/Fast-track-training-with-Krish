import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './schema/Pet.schema';

@Controller()
export class PetsController {

    constructor(private petsService: PetsService) { }

    @Get('api/pets')
    async getAllPets(): Promise<Pet[]> {
        try {
            return await this.petsService.getAllPets();
        } catch (error) {
            console.log('Pets retrieval is failed..');
            console.log(error);
        }
    }

    @Post('api/pets')
    @HttpCode(HttpStatus.CREATED)
    async createPet(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('weight') weight: number
    ): Promise<Pet> {
        try {
            return await this.petsService.createPet(name, age, weight);
        } catch (error) {
            console.log('Pet creation is failed..');
            console.log(error);
        }
    }

    @Patch('api/pets/:id')
    @HttpCode(HttpStatus.CREATED)
    async updatePet(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('weight') weight: number
    ): Promise<Pet> {
        try {
            return await this.petsService.updatePet(id, name, age, weight);
        } catch (error) {
            console.log(`Updating of pet with id=${id} is failed..`);
            console.log(error);
        }
    }

    @Delete('api/pets/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletePet(@Param('id') id: string,): Promise<void> {
        try {
            return await this.petsService.deletePet(id);
        } catch (error) {
            console.log(`Deletion of Pet with id=${id} is failed...`);
            console.log(error);
        }
    }

    @Get('api/pets/:id')
    async getPetById(@Param('id') id: string): Promise<Pet> {
        try {
            return await this.petsService.getPetById(id);
        } catch (error) {
            console.log(`Retrieving of Pet with id=${id} is failed...`);
            console.log(error);
        }
    }
}
