import { Router } from "express";
import { CurriencieController } from "../controllers/index.js";

const CurriencieRouter = Router();

CurriencieRouter.get("/default", CurriencieController.getCurrencies);
CurriencieRouter.get("/", CurriencieController.currencyConversions);
export default CurriencieRouter;
