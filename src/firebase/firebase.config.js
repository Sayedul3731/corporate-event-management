// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJjbSQhZb3I_YZvORctusVmLch0YllJGs",
  authDomain: "corporate-event-manageme-92f84.firebaseapp.com",
  projectId: "corporate-event-manageme-92f84",
  storageBucket: "corporate-event-manageme-92f84.appspot.com",
  messagingSenderId: "393020203533",
  appId: "1:393020203533:web:5a1da0e38f8148522c2b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;