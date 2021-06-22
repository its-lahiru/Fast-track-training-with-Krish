import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, fileFilter } from 'src/utils/file-upload.utils';
import { VehiclesService } from './vehicles.service';

@Controller()
export class VehiclesController {

    constructor(private readonly vehicleService: VehiclesService) { }

    @Post('api/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files',
            filename: editFileName,
        }),
        fileFilter: fileFilter,
    }))
    async saveUpload(@UploadedFile() file: any) {
        console.log(file);
        return await this.vehicleService.saveExcelData(file);
    }

}
