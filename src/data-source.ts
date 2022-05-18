import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import dotenv from 'dotenv'
import { User1652858631939 } from "./migration/1652858631939-User"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: process.env.NODE_ENV == 'development' ? true : false,
    entities: [User],
    migrations: [
        User1652858631939
    ],
    subscribers: [],
})
