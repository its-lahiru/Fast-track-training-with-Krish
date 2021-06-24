import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Vehicle } from 'src/entity/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {

    constructor(@InjectQueue('vehicle') private vehicleQueue: Queue) { }

    async addToQueue(file: any) {
        await this.vehicleQueue.add('saving', {
            file: file
        },
            { delay: 5000 }
        );
    }

}
