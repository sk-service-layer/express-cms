import { Collection, Document, ObjectId } from "mongodb";
import { db } from "../../db";
import { Post } from "./types";

export async function getPosts(): Promise<Document[]> {
  const collection: Collection = db.collection("posts");
  const options = {
    projection: { _id: 0 },
  };
  const cursor = collection.find({}, options);
  const docs: Document[] = [];

  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return docs;
}

export async function getPostByLicencePlate(licencePlate: string): Promise<Document[]> {
  const collection: Collection = db.collection("posts");

  const query = {
    licencePlate,
  };
  const options = {
    projection: { _id: 0 },
  };
  const cursor = collection.find(query, options);

  const docs: Document[] = [];
  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return docs;
}

// TODO: Fix query by username, its currently returning an empty array
export async function getPostByUsername(username: string): Promise<Document[]> {
  const collection: Collection = db.collection("posts");

  const query = {
    user: {
      username
    }
  };
  const options = {
    projection: { _id: 0 },
  };
  const cursor = collection.find(query, options);

  const docs: Document[] = [];
  await cursor.forEach((doc) => {
    docs.push(doc);
  });

  return docs;
}

export async function createPost(post: Post): Promise<void> {
  const collection: Collection = db.collection("posts");
  const result = await collection.insertOne(post);
  if (result.acknowledged) {
    console.log("Post with ID: " + result.insertedId + " added.");
  }
}

export async function deletePost(postId: string): Promise<boolean> {
  const collection: Collection = db.collection("posts");
  const query = {
    _id: new ObjectId(postId),
  };
  const result = await collection.deleteOne(query);
  return result.deletedCount != 0;
}
