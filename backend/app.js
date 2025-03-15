import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import express from 'express';
import connect from './db/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
connect();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');  // dummy route
});

export default app;