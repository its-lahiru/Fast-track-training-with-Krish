
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getAllCarsFilteredAsc(first: number, offset: number, orderBy: string, car_model: string): CardataConn | Promise<CardataConn>;
    getAllCars(): Car[] | Promise<Car[]>;
}

export interface IMutation {
    updateCar(): Car | Promise<Car>;
    deleteCar(): string | Promise<string>;
}

export interface Car {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    car_make: string;
    car_model: string;
    vin: string;
    manufactured_date: string;
    age_of_vehicle: number;
}

export interface CardataConn {
    nodes: Car[];
    totalCount: number;
}
