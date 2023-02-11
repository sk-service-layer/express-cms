import { Collection, Document, ObjectId } from "mongodb";
import { db } from "../../db";
import { Post } from "./types";

// [TODO]: make sure return type is correct
export async function getPosts(): Promise<any> {
  const collection: Collection = await db.collection("posts");
  const cursor = collection.find({}).limit(2);

  const docs: Document[] = [];
  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return { docs };
}

export async function createPost(post: Post): Promise<void> {
  const collection: Collection = await db.collection("posts");
  const result = await collection.insertOne(post);
  if (result.acknowledged) {
    console.log("Post with ID: " + result.insertedId + " added.");
  }
}
