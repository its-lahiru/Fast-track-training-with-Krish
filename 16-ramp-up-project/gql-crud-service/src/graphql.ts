
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract getAllCarsFilteredAsc(first: number, offset: number, orderBy: string, carModel: string): CardataConn | Promise<CardataConn>;

    abstract getAllCars(): Car[] | Promise<Car[]>;

    abstract getACar(id: number): Car | Promise<Car>;
}

export abstract class IMutation {
    abstract updateCar(id: number, firstName?: string, lastName?: string, email?: string, carMake?: string, carModel?: string, vin?: string): Car | Promise<Car>;

    abstract deleteCar(id: string): Car | Promise<Car>;
}

export class Car {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vin: string;
    manufacturedDate: string;
    ageOfVehicle: number;
}

export class CardataConn {
    nodes: Car[];
    totalCount: number;
}
