import { Collection, Document } from "mongodb";
import { db } from "../../db";

export async function getPosts(): Promise<any> {
  const collection: Collection = await db.collection("comments");
  const cursor = collection.find({}).limit(2);

  const docs: Document[] = [];
  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return { docs };
}
