import { Application } from "express";
import { ArgumentUndefinedOrNullError } from "./errors/ArgumentUndefinedOrNullError";
import * as express from 'express';
import { Routes } from "./Routes";
import { PgDatabase } from "./database/PgDatabase";

export class Server {

    constructor(app: Application) {
        if (app == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('app');

        this.setupApp(app);
        new Routes(app, new PgDatabase());
    }

    setupApp(app: Application) {
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        //app.use(uncaughtErrorHandler);

    }

}

