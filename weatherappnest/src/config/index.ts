import { config } from 'dotenv';
import { IConfig } from './type';

const port = process.env.PORT;
config();
const Config: IConfig = {
    PORT: port || process.env.PORT || 3000,
    accessKey: process.env.FRONTEND_ACCESS_KEY,
    db: {
        dialect: 'postgres',
        host: process.env.PGHOST,
        port: 5432,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        noConsole: true,
    }
}

export default Config;