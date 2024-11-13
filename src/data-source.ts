import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.76.108.247",
    port: 5432,
    username: "root",
    password: "arsen123456!",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ['src/migration/**/*.ts'],
    subscribers: [],
})
