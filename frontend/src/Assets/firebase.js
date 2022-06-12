import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGVSiDdTxsAqevi-JOIYOqq3pq7zxBSIw",
  authDomain: "chat-app-6cd3f.firebaseapp.com",
  projectId: "chat-app-6cd3f",
  storageBucket: "chat-app-6cd3f.appspot.com",
  messagingSenderId: "634836433114",
  appId: "1:634836433114:web:beaa16a86649320b788de3",
  measurementId: "G-0XEYPKYH4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
