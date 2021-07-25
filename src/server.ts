import express, { NextFunction, Request, Response } from "express";
import {router} from "./routes";
import { api } from "./apiPipedrive";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("The server is running!"));
