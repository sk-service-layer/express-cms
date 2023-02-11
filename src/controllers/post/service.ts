import { Collection, Document } from "mongodb";
import { db } from "../../db";
import { Post } from "./types";


// [TODO]: make sure return type is correct
export async function getPosts(): Promise<any> {
  const collection: Collection = await db.collection("comments");
  const cursor = collection.find({}).limit(2);

  const docs: Document[] = [];
  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return { docs };
}


export async function createPost(post: Post): Promise<void> {
  
  
}