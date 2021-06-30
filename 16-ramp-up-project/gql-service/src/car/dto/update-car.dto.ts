import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateCarDTO {
    @Field()
    id: number;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;

    @Field()
    car_make: string;

    @Field()
    car_model: string;

    @Field()
    vin: string;
}