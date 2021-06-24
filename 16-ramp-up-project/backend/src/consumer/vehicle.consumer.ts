import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import readXlsxFile from 'read-excel-file/node';
import XLSX from 'xlsx';

import { Vehicle } from 'src/entity/vehicle.entity';
import { calculateVehicleAge } from 'src/utils/calculate-age.util';

@Processor('vehicle')
export class VehicleConsumer {

    constructor(@InjectRepository(Vehicle) private readonly vehicleRepository: Repository<Vehicle>) { }

    @Process('saving')
    async handleDataSaving(job: Job) {

        // relative path to uploaded files
        const path = './src/resources/static/assets/uploads/' + job.data.file.filename;

        readXlsxFile(path).then((rows: any) => {
            for (const row in rows) {
                if (parseInt(row) === 0) {
                    continue;
                } else {
                    // get current row
                    const currentRow = rows[parseInt(row)];

                    //get manufatured date
                    const manufacturedDate = new Date(currentRow[7]);
                    const manufacturedYear = manufacturedDate.getFullYear();

                    // calculate vehicle age
                    const vehicleAge = calculateVehicleAge(manufacturedYear);

                    // create vehicle object using current row data
                    const vehicle = {
                        id: parseInt(currentRow[0]),
                        first_name: currentRow[1],
                        last_name: currentRow[2],
                        email: currentRow[3],
                        car_make: currentRow[4],
                        car_model: currentRow[5],
                        vin: currentRow[6],
                        manufactured_date: currentRow[7],
                        age_of_vehicle: vehicleAge
                    }
                    // save record
                    this.vehicleRepository.save(vehicle);
                }
            }
        }).catch(err => {
            console.log("Data saving is failed: ", err)
        });
    }
}