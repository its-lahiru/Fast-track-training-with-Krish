import { InjectQueue } from '@nestjs/bull';
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Queue } from 'bull';
import { diskStorage } from 'multer';
import { editFileName, fileFilter } from 'src/utils/file-upload.utils';
import { VehiclesService } from './vehicles.service';

@Controller()
export class VehiclesController {

    constructor(@InjectQueue('vehicle') private vehicleQueue: Queue) { }

    @Post('api/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './src/resources/static/assets/uploads',
            filename: editFileName,
        }),
        fileFilter: fileFilter,
    }))
    async saveUpload(@UploadedFile() file: any) {
        await this.vehicleQueue.add('saving', {
            file: file
        },
            { delay: 2000 }
        );
    }

}
