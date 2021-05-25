/* eslint @typescript-eslint/no-var-requires: "off" */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const cors = require("cors")({origin: true});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript


admin.initializeApp();
const db = admin.firestore();


export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  cors(request, response, ()=>{
    functions.logger.info("Hello logs!", {structuredData: true});
    const docRef = db.collection("AOT").doc("CvWteQocfyWuHP81TLfx");
    docRef.get().then((doc) => {
      if (!doc.exists) {
        console.log("No such document");
        return response.send("Not Found");
      }
      console.log(doc.data());
      return response.send(doc.data());
    }).catch((err) => {
      console.log("Error getting Document", err);
    });
  });
});
