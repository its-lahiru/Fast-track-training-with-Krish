import { Body, Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class VehicleController {

    @MessagePattern({ cmd: 'saveData' })
    async handleVehicleCreated(@Body('data') data: any) {
        console.log(data);
    }

}
