import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetsService } from './pets.service';
import { Pet } from './schema/Pet.schema';

@Controller()
export class PetsController {

    constructor(private petsService: PetsService) { }

    @Get('api/pets')
    async getAllPets(): Promise<Pet[]> {
        return await this.petsService.getAllPets();
    }

    @Post('api/pets')
    @HttpCode(HttpStatus.CREATED)
    async createPet(@Body() data: CreatePetDto): Promise<Pet> {
        return await this.petsService.createPet(data);
    }

    @Patch('api/pets/:id')
    @HttpCode(HttpStatus.CREATED)
    async updatePet(
        @Param('id') id: string,
        @Body() data: UpdatePetDto,
    ): Promise<Pet> {
        return await this.petsService.updatePet(id, data);
    }

    @Delete('api/pets/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletePet(@Param('id') id: string,): Promise<void> {
        return await this.petsService.deletePet(id);
    }

    @Get('api/pets/:id')
    async getPetById(@Param('id') id: string): Promise<Pet> {
        return await this.petsService.getPetById(id);
    }
}
