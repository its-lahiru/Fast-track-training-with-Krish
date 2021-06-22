import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    year: string;
    @Column()
    model: string;
    @Column()
    registerNumber: number;
}