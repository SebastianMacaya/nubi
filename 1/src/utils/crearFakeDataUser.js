import { db } from "../db.js";
import faker from "faker";
faker.locale = "es";

//AGREGAR USUARIO CON FAKE DATA

var crearFakeData = async function () {
  for (let i = 0; i < 5; i++) {
    const user = {};
    user.nombre = faker.name.firstName();

    user.apellido = faker.name.lastName();

    user.email = faker.internet.email();
    user.password = faker.internet.password();
    await db("users").insert(user);
  }
};
crearFakeData();
