import admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: 'fast-feedback-2ec3d'
    }),
    databaseURL: 'https://fast-feedback-2ec3d.firebaseio.com'
  });
}
const auth = admin.auth();
const db = admin.firestore();
export { auth, db };
