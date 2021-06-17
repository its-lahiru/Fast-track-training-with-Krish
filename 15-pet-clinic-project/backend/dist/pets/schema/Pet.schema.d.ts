import { Document } from "mongoose";
export declare type PetDocument = Pet & Document;
export declare class Pet {
    id: string;
    name: string;
    age: number;
    weight: number;
}
export declare const PetSchema: import("mongoose").Schema<Document<Pet, any>, import("mongoose").Model<any, any, any>, undefined>;
