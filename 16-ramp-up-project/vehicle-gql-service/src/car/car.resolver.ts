import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarService } from './car.service';
import { UpdateCarDTO } from './dto/update-car.dto';

@Resolver()
export class CarResolver {

    constructor(private readonly carService: CarService) { }

    @Query()
    async getAllCarsFilteredAsc(
        @Args('first') first: number,
        @Args('offset') offset: number,
        @Args('orderBy') orderBy: string,
        @Args('car_model') car_model: string
    ) {
        return await this.carService.getAllCarsFilteredAsc(first, offset, orderBy, car_model);
    }

    @Query()
    async getAllCars() {
        return await this.carService.getAllCars();
    }

    @Mutation(() => UpdateCarDTO)
    async updateCar(
        @Args('id') id: number,
        @Args('firstame') firstName: string,
        @Args('lastName') lastName: string,
        @Args('email') email: string,
        @Args('carMake') carMake: string,
        @Args('carModel') carModel: string,
        @Args('vin') vin: string,
    ) {
        return await this.carService.updateCar(id, firstName, lastName, email, carMake, carModel, vin);
    }

    @Mutation()
    async deleteCar(@Args('id') id: number) {
        return await this.carService.deleteCar(id);
    }
}
