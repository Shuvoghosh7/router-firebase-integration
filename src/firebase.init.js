import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBOICUFRfRR-DZOYSgyvj4lGYbcjV5mf8E",
  authDomain: "router-firebase-integrat-c2bfb.firebaseapp.com",
  projectId: "router-firebase-integrat-c2bfb",
  storageBucket: "router-firebase-integrat-c2bfb.appspot.com",
  messagingSenderId: "510099812404",
  appId: "1:510099812404:web:033d48a3faa05fe41c1a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app