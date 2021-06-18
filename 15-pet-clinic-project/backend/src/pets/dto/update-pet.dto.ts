import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePetDto{

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsNumber()
    weight: number;
}