import UserService from "../services/user.services.js";

//Traer todos los usuarios

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      return res.send(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  //BORRAR USER POR ID

  async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      await UserService.deleteUser(userId);
      res.status(200).send(`Usuario borrado`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  //AGREAR USER NUEVO
  async addNewUser(req, res) {
    const { body } = req;
    try {
      await UserService.addNewUser(body);
      res.status(200).send(`Usuario Creado`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async updateUser(req, res) {
    const { body } = req;

    const { userId } = req.params;
    try {
      await UserService.updateUser(body, userId);
      res.status(200).send(`Usuario Actualizado`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default new UserController();
