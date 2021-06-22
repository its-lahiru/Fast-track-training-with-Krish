import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import EventEmitter from 'events';
import { Repository } from 'typeorm';
import { v1 as uuid } from 'uuid';

import { ExcelFile } from './excel-file.entity';

@Injectable()
export class VehiclesService {

    constructor(
        @InjectRepository(ExcelFile) private readonly repository: Repository<ExcelFile>,
        @Inject('VEHICLES_SERVICE') private readonly client: ClientProxy) { }

    async saveExcelFile(file) {
        return this.repository.save(uuid(), file);
    }

    async isAllVehiclesSaved() {
        this.client.emit('vehicles_saved', new EventEmitter());
    }
}
