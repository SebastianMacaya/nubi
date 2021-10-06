import { Router } from "express";
import paisesRouter from "./paises.router.js";
import busquedasRouter from "./busquedas.router.js";
import usuariosRouter from "./usuarios.router.js";

const apiRouter = Router();

apiRouter.use("/paises", paisesRouter);
apiRouter.use("/busqueda", busquedasRouter);
apiRouter.use("/usuarios", usuariosRouter);
export default apiRouter;
