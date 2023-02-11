import { Collection, Document, ObjectId } from "mongodb";
import { db } from "../../db";
import { Post } from "./types";


export async function getPosts(): Promise<Document[]> {
  const collection: Collection = await db.collection("posts");
  const cursor = collection.find();
  const docs: Document[] = [];
  
  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return docs;
}

export async function createPost(post: Post): Promise<void> {
  const collection: Collection = await db.collection("posts");
  const result = await collection.insertOne(post);
  if (result.acknowledged) {
    console.log("Post with ID: " + result.insertedId + " added.");
  }
}
