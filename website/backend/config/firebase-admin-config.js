
import admin from "firebase-admin";
import api_key from "./adminkey.js";
//import serviceAccount from "./vision-voice--test-firebase-adminsdk-q7lz6-f163a53cfc.json";

admin.initializeApp({
  credential: admin.credential.cert(api_key),
  databaseURL: "https://vision-voice--test-default-rtdb.firebaseio.com"
});

export default admin;
