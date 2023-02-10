import { Db, MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();

let client: MongoClient;
let db: Db;

const uri: string = process.env.MONGODB_URI ?? "";

const connectToDatabase = async () => {
  client = new MongoClient(uri);
  await client.connect();
  db = client.db("sample_mflix");
};

export { connectToDatabase, client, db };
