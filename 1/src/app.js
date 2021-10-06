import express from "express";

//Importo rutas
import apiRouter from "./routers/index.js";
const app = express();

app.use(express.json());

app.use("/MyRestfulApp", apiRouter);

export default app;
