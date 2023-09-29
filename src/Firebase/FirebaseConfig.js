// import "firebase/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAyDSPaLDkhKtsV72bvgQhUbUCpea-dDw",
  authDomain: "online-cart-34b2f.firebaseapp.com",
  projectId: "online-cart-34b2f",
  storageBucket: "online-cart-34b2f.appspot.com",
  messagingSenderId: "465006807500",
  appId: "1:465006807500:web:79a14cfd523672cf5cb569",
  measurementId: "G-E0LMVX0454",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
