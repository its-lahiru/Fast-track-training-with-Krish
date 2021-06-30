import { Injectable } from '@nestjs/common';
import { request, gql } from 'graphql-request';
import { QUERY_DELETE_CAR, QUERY_GET_ALL_CARS, QUERY_GET_ALL_CARS_FILTERED, QUERY_UPDATE_CAR } from './queries/query';

@Injectable()
export class CarService {

    private endpoint = 'http://localhost:5000/graphiql';

    async getAllCarsFilteredAsc(first: number, offset: number, orderBy: string, car_model: string) {

        const query = QUERY_GET_ALL_CARS_FILTERED;

        const variables = {
            "first": first,
            "offset": offset,
            "orderBy": orderBy,
            "car_model": car_model,
        }

        let output = await request(this.endpoint, query, variables);

        const cars = output.allCars;

        return cars;
    }

    async getAllCars() {

        const query = QUERY_GET_ALL_CARS;

        let output = await request(this.endpoint, query);

        const cars = output.allCars;

        return cars;
    }

    async updateCar(id: number, firstName: string, lastName: string, email: string, carMake: string, carModel: string, vin: string) {
        const query = QUERY_UPDATE_CAR;

        const variables = {
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "carMake": carMake,
            "carModel": carModel,
            "vin": vin,
        }

        let output = await request(this.endpoint, query, variables);

        const cars = output.allCars;

        return cars;
    }

    async deleteCar(id: number) {
        const query = QUERY_DELETE_CAR;

        const variables = {
            "id": id
        }

        let output = await request(this.endpoint, query, variables);

        const cars = output.allCars;

        return cars;
    }
}
