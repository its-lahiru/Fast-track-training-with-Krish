import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExcelFile {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    filename: BinaryType;

    // @Column()
    // bytefile: string;

}