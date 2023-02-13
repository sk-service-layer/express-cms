const admin = require("firebase-admin");
const credentials = require("./serviceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

export default admin;