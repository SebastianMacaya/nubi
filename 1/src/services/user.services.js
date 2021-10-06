import { db } from "../db.js";

class UserService {
  async getAllUsers() {
    try {
      const users = await db("users").select();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(userId) {
    try {
      await db("users").del().where("id", userId);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addNewUser(data) {
    try {
      await db("users").insert(data);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(data, userId) {
    try {
      await db("users").update(data).where("id", userId);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default new UserService();
