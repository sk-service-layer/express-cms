import { Db, MongoClient } from "mongodb";

let client: MongoClient;
let db: Db;

const uri: string = process.env.MONGODB_URI ?? 
"mongodb+srv://syedfkabir:Sf173782@cluster0.ur6lbt9.mongodb.net/?retryWrites=true&w=majority";

const connectToDatabase = async () => {
  client = new MongoClient(uri);
  await client.connect();
  db = client.db("sample_mflix");
};

export { connectToDatabase, client, db };
