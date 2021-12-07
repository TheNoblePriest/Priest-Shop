import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmdF2tWP_c4iA-t2V1vv_QWtQiAODFu50",
  authDomain: "shopstop-588d1.firebaseapp.com",
  projectId: "shopstop-588d1",
  storageBucket: "shopstop-588d1.appspot.com",
  messagingSenderId: "446174196864",
  appId: "1:446174196864:web:df3e312b4dadfd0f9ba265",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = firebase.auth();

export { app, db, storage, auth };
