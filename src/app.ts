import 'dotenv/config';
import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import { errors } from 'celebrate';

export class App {
    public server = express();

    constructor() {
        this.database();
        this.middlewares();
        this.routes();
        this.server.use(errors());
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    database() {
        const { DB_USER, DB_PASS, DB_NAME } = process.env;
        mongoose
            .connect(
                `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-8ak9k.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
                { useNewUrlParser: true, useUnifiedTopology: true }
            )
            .then(() => {})
            .catch(e => console.log(e));
    }
}
