// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId ,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId ,
//   appId: import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6BcHwbzO4nK5GMVvVXUD7SrzRnRH18RQ",
  authDomain: "car-doctor-f700a.firebaseapp.com",
  projectId: "car-doctor-f700a",
  storageBucket: "car-doctor-f700a.appspot.com",
  messagingSenderId: "113700739744",
  appId: "1:113700739744:web:1a670b8b59486cc77f07c5",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;