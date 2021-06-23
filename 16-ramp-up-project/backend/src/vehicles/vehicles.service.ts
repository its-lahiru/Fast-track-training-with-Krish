import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Vehicle } from 'src/entity/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {

    constructor(
        @InjectRepository(Vehicle) private readonly repository: Repository<Vehicle>,
        @InjectQueue('vehicle') private vehicleQueue: Queue
        ) { }

    async processFile(file: any) {
        await this.vehicleQueue.add('saving', {
            file: file
        },
            { delay: 5000 }
        );
    }

    async saveFile() {
        
    }

}
