import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import XLSX from 'xlsx';
import fs from 'fs';

import { Vehicle } from 'src/entity/vehicle.entity';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { calculateVehicleAge } from 'src/utils/calculate-age.util';

@Processor('vehicle')
export class VehicleConsumer {

    constructor(@InjectRepository(Vehicle) private readonly repository: Repository<Vehicle>) { }

    @Process('saving')
    async handleDataSaving(job: Job) {
        const path = '../resources/static/assets/uploads/' + job.data.file.filename;

        const workbook = XLSX.read(fs.readFileSync(path));

        const sheetNames = workbook.SheetNames;

        const xldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
        console.log(xldata);

    }
}