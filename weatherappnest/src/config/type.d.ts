import { Dialect } from "sequelize";

interface IDB {
    dialect: Dialect;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    ssl: boolean;
    dialectOptions?: {
        ssl: {
            require: boolean,
            rejectUnauthorized: boolean,
        }
    };
    noConsole?: boolean;

}

export interface IConfig {
    accessKey: string;
    PORT: number | string;
    db: IDB;
}