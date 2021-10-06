import { db } from "./src/db.js";
import faker from "faker";
faker.locale = "es";
(async function () {
  try {
    /* ------------------------------ tabla existe ------------------------------ */
    const exist = await db.schema.hasTable("users");

    /* ------------------------------- crear tabla ------------------------------ */
    if (!exist) {
      await db.schema.createTable("users", (table) => {
        table.increments("id").primary().notNullable();
        table.string("nombre", 100).notNullable();
        table.string("apellido", 100).notNullable();
        table.string("email", 100).notNullable();
        table.string("password", 100).notNullable();
      });

      console.log("Tabla  users creada");
      console.log("Fake Data agregada a la base de datos");
      crearFakeData();
    }
  } catch (error) {
    console.log(error);
  }
})();

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
