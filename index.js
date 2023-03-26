import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import { contactRoute, projectRoute } from './routes/index.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

//* Database connection
const connection = async () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

//* Routes

app.use('/api/contact', contactRoute);
app.use('/api/project', projectRoute);
// app.use('/api/skills', skillsRoute);

//* Middlewares
app.use((err, req, res, next) => {
    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message || 'Something went wrong';

    return res.status(errorStatus).send({ message: errorMessage });
});

//* Server listening
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connection();
});
