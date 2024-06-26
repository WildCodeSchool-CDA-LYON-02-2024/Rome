import dotenv from "dotenv";
dotenv.config();
import { createConnection } from "mysql2";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export class Database {
  connection = null;

  constructor() {
    this.connection = createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
  }

  stop() {
    this.connection.end();
  }
}
