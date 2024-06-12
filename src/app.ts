
// all the imports here
import express, { Application } from 'express';
import cors from 'cors';

// call the express app
const app: Application = express();

// call the express json and cors parser
app.use(express.json());
app.use(cors());


// all the exports here
export default app;