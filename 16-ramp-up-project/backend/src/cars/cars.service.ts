import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class CarsService {

    constructor(@InjectQueue('car') private carQueue: Queue) { }

    async addToQueue(file: any) {
        await this.carQueue.add('saving', {
            file: file
        },
            { delay: 5000 }
        );
    }

}
