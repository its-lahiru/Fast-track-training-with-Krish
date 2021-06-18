import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePetDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsNumber()
    weight: number;
}