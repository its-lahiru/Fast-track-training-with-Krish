import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Vehicle {

    @PrimaryColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    car_make: string;

    @Column()
    car_model: string;

    @Column()
    vin: string;

    @Column() //{ type: 'date' }
    manufactured_date: string;

    @Column()
    age_of_vehicle: number;

}