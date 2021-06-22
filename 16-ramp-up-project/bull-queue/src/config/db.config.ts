import { Vehicle } from "src/entity/vehicle.entity";

export const dbConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'vehicle',
    entities: [Vehicle],
    synchronize: true,
    autoLoadEntities: true

}