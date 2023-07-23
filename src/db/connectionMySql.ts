import { Sequelize } from "sequelize";

const dbMySQL:Sequelize = new Sequelize("rrhh", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  
});

export default dbMySQL;
