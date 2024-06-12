
// all the imports here
import path from 'path';
import dotenv from 'dotenv';

// requireing the path from env
dotenv.config({path: path.join(process.cwd(), '.env')});

// all the exports here
export default {
    port: process.env.PORT,
    dataBaseUrl: process.env.DATABASE_URL,
};