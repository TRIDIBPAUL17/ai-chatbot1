// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX_Pbu4JJTSvP5OSe6kUeeNcxNeISJlDw",
  authDomain: "ai-chatbot-2b053.firebaseapp.com",
  projectId: "ai-chatbot-2b053",
  storageBucket: "ai-chatbot-2b053.appspot.com",
  messagingSenderId: "258175599212",
  appId: "1:258175599212:web:9fdef9136ecfbbc0950e49",
  measurementId: "G-B15BDKKH5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);