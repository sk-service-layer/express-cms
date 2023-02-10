import { db } from "../../db";

export async function getPosts(): Promise<any> {
  const collection = await db.collection("comments");
  const cursor = collection.find({}).limit(2);
  const docs: any[] = [];
  for await (const doc of cursor) {
    docs.push(doc);
  }

  return { docs };
}
