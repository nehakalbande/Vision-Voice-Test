
import admin from "firebase-admin";

import serviceAccount from "./vision-voice--test-firebase-adminsdk-q7lz6-f163a53cfc.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vision-voice--test-default-rtdb.firebaseio.com"
});

export default admin;