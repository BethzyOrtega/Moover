
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClKGISxNX7d_-aha6jIvY2-REvMHOFxfQ",
  authDomain: "moover-86b10.firebaseapp.com",
  projectId: "moover-86b10",
  storageBucket: "moover-86b10.appspot.com",
  messagingSenderId: "315313816365",
  appId: "1:315313816365:web:20e25e64e38e86e96b09a4",
  measurementId: "G-36L4CFJWED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// const analytics = getAnalytics(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
