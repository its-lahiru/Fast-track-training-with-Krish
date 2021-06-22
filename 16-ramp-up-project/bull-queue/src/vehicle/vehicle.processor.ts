import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('vehicle')
export class VehicleProcessor {
    private readonly logger = new Logger(VehicleProcessor.name);

    @Process('saving')
    handleTranscode(job: Job) {
        this.logger.debug('Start saving...');
        this.logger.debug(job.data);
        this.logger.debug('Saving completed');
    }
}