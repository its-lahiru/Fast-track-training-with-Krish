import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, fileFilter } from 'src/utils/file-upload.utils';
import { CarsService } from './cars.service';

@Controller()
export class CarsController {

    constructor(private readonly carService: CarsService) { }

    @Post('api/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './src/resources/static/assets/uploads',
            filename: editFileName,
        }),
        fileFilter: fileFilter,
    }))
    async saveUploadFile(@UploadedFile() file: any) {
        await this.carService.addToQueue(file);
    }

}
