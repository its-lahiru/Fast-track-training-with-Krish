import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from 'src/graphql';
import { CarService } from './car.service';

@Resolver('Car')
export class CarResolver {

    constructor(private readonly carService: CarService) { }

    @Query('getAllCarsFilteredAsc')
    async getAllCarsFilteredAsc(
        @Args('first') first: number,
        @Args('offset') offset: number,
        @Args('orderBy') orderBy: string,
        @Args('carModel') carModel: string
    ): Promise<[Car]> {
        return await this.carService.getAllCarsFilteredAsc(first, offset, orderBy, carModel);
    }

    @Query('getAllCars')
    async getAllCars(): Promise<[Car]> {
        return await this.carService.getAllCars();
    }

    @Query('getACar')
    async getCar(@Args('id') id: number): Promise<Car> {
        return await this.carService.getACar(id);
    }

    @Mutation('updateCar')
    async updateCar(
        @Args('id') id: number,
        @Args('firstName') firstName: string,
        @Args('lastName') lastName: string,
        @Args('email') email: string,
        @Args('carMake') carMake: string,
        @Args('carModel') carModel: string,
        @Args('vin') vin: string,
    ): Promise<Car> {
        return await this.carService.updateCar(id, firstName, lastName, email, carMake, carModel, vin);
    }

    @Mutation('deleteCar')
    async deleteCar(@Args('id') id: number): Promise<number> {
        return await this.carService.deleteCar(id);
    }
}










// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { CarService } from './car.service';
// import { UpdateCarDTO } from './dto/update-car.dto';
// import { Car } from './entities/car.entity';

// @Resolver(() => Car)
// export class CarResolver {

//     constructor(private readonly carService: CarService) { }

//     @Query(returns => [Car], { name: 'getAllCarsFilteredAsc' })
//     async getAllCarsFilteredAsc(
//         @Args('first') first: number,
//         @Args('offset') offset: number,
//         @Args('orderBy') orderBy: string,
//         @Args('carModel') carModel: string
//     ) {
//         return await this.carService.getAllCarsFilteredAsc(first, offset, orderBy, carModel);
//     }

//     @Query(returns => [Car], { name: 'getAllCars' })
//     async getAllCars() {
//         return await this.carService.getAllCars();
//     }

//     @Query(returns => Car, { name: 'getACar' })
//     async getCar(@Args('id') id: number) {
//         return await this.carService.getACar(id);
//     }

//     @Mutation(returns => Car, { name: 'updateCar' })
//     async updateCar(
//         @Args('id') id: number,
//         @Args('firstName') firstName: string,
//         @Args('lastName') lastName: string,
//         @Args('email') email: string,
//         @Args('carMake') carMake: string,
//         @Args('carModel') carModel: string,
//         @Args('vin') vin: string,
//     ) {
//         return await this.carService.updateCar(id, firstName, lastName, email, carMake, carModel, vin);
//     }

//     @Mutation(returns => Car, { name: 'deleteCar' })
//     async deleteCar(@Args('id') id: number) {
//         return await this.carService.deleteCar(id);
//     }
// }

