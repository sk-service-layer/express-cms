import { Collection, Document, ObjectId } from "mongodb";
import { db } from "../../db";
import { Post } from "./types";
var mongodb = require('mongodb');


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

export async function deletePost(postId: string): Promise<boolean> {
  const collection: Collection = await db.collection("posts");
  const query = {
    _id: new ObjectId(postId)
  }
  const result = await collection.deleteOne(query);
  return result.deletedCount != 0;
}
