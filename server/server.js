import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

/* Import Connection File */
import connect from './database/conn.js';

const app = express()

/* App Middlewares */

app.use(morgan('tiny'));
app.use(cors({ origin: '*' }));
app.use(express.json());
config();

/* Application Port */

const port = process.env.PORT || 8080;

/* Routes */
app.use('/api', router); //API's

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

/* Start Server Only When We Have A Valid Connection */
connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error("Invalid Database Connection", error);
    });
