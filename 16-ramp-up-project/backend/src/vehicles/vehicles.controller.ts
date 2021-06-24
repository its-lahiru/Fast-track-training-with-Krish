import { InjectQueue } from '@nestjs/bull';
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Queue } from 'bull';
import { diskStorage } from 'multer';
import { editFileName, fileFilter } from 'src/utils/file-upload.utils';
import { VehiclesService } from './vehicles.service';

@Controller()
export class VehiclesController {

    constructor(private readonly vehicleService: VehiclesService) { }

    @Post('api/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './src/resources/static/assets/uploads',
            filename: editFileName,
        }),
        fileFilter: fileFilter,
    }))
    async saveUploadFile(@UploadedFile() file: any) {
        await this.vehicleService.addToQueue(file);
    }

}
