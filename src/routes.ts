import {Router} from "express";

import mongoose from "mongoose";
import { DealsWithWonController } from "./controllers/DealsWithWonController";


//Connectando no mongo
const uri = "{YourMongoConnectionAPI}";
mongoose.connect(uri);
//----

const router = Router();

const dealsWithWonController = new DealsWithWonController();

router.post("/users", dealsWithWonController.handle);

export {router};