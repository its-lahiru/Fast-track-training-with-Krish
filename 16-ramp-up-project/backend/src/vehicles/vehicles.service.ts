import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ClientProxy, Payload } from '@nestjs/microservices';
import EventEmitter from 'events';

@Injectable()
export class VehiclesService {

    constructor(@Inject('VEHICLES_SERVICE') private readonly client: ClientProxy) { }

    async saveExcelData(file: any) {
        const pattern = { cmd: 'saveData' };
        const payload = file;
        return this.client.send<any>(pattern, payload);
    }

}
