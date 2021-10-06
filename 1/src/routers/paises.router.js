import { Router } from "express";
import { PaisesController } from "../controllers/index.js";
import { unauthorizedCountry } from "../middlewares/paises.middleware.js";
const paisesRouter = Router();

//MyRestfulApp/Paises/:country
paisesRouter.get(
  "/:country",
  [unauthorizedCountry],
  PaisesController.getCountry
);

//MyRestfulApp/Paises/
paisesRouter.get("/", PaisesController.getCountries);

export default paisesRouter;
