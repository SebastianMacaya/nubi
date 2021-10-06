import { Router } from "express";
import { BusquedaController } from "../controllers/index.js";
const BusquedaRouter = Router();

BusquedaRouter.get("/:name", BusquedaController.searchByName);

export default BusquedaRouter;
