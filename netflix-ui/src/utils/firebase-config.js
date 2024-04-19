import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqyd4Oxz9ZSVmvv4p2JNCxiWvcxp_gIHg",
  authDomain: "react-netflix-clone-c5e80.firebaseapp.com",
  projectId: "react-netflix-clone-c5e80",
  storageBucket: "react-netflix-clone-c5e80.appspot.com",
  messagingSenderId: "661708859683",
  appId: "1:661708859683:web:172591330188b48aaec496",
  measurementId: "G-ZYSKFEZY3B",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
