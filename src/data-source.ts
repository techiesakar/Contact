import "reflect-metadata";
import { DataSource } from "typeorm";
import { People } from "./entity/People";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "naturelove8",
  database: "contacts",
  synchronize: true,
  logging: false,
  entities: [People],
  migrations: [],
  subscribers: [],
});
