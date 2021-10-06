import { Router } from "express";
import { UserController } from "../controllers/index.js";
const usuarioRouter = Router();

usuarioRouter.get("/", UserController.getAllUsers);
usuarioRouter.delete("/:userId", UserController.deleteUser);
usuarioRouter.post("/", UserController.addNewUser);
usuarioRouter.put("/:userId", UserController.updateUser);
export default usuarioRouter;
