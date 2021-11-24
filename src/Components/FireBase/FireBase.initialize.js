import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";


const initializeAuth =()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuth;