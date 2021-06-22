import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class VehicleController {

    @EventPattern('vehicles_saved')
    async handleVehicleCreated(data: Record<string, unknown>) {
        // business logic
    }

}
