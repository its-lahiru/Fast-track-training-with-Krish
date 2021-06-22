import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { VehiclesService } from './vehicles.service';

@Controller()
export class VehiclesController {

    constructor(private readonly vehicleService: VehiclesService) { }

    @Post('api/upload')
    @UseInterceptors(FileInterceptor('file'))
    async saveUpload(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        
    }

}
