import { Router } from "express";
import CurriencieRouter from "./curriencie.router.js";

const apiRouter = Router();
apiRouter.use("/curriencies", CurriencieRouter);

export default apiRouter;
