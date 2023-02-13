import { UserRecord } from "firebase-admin/lib/auth";
import admin from "../../firebaseConfig";
import { User } from "./types";

export async function signUp(credentials: User): Promise<any> {
  if (credentials.email && credentials.password) {
    const user = admin.auth().createUser({
      email: credentials.email,
      password: credentials.password,
    });
    return user;
  } else {
    throw new Error("Credentials not provided");
  }
}

export async function login(credentials: User): Promise<any> {
  const userRecord: UserRecord = await admin.auth().getUserByEmail(credentials?.email);
  const customToken = await admin.auth().createCustomToken(userRecord.uid);
  return customToken;
}
