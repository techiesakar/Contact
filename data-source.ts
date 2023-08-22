import config from "./config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Candidate } from "./entity/Candidate";
import { District } from "./entity/District";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.database.hostname,
  port: 5432,
  username: config.database.username,
  password: config.database.password,
  database: config.database.name,
  synchronize: true,
  logging: false,
  entities: [Candidate, District],
  migrations: [],
  subscribers: [],
});
