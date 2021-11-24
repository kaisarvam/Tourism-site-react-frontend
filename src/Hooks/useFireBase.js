import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import initializeAuth from '../Components/FireBase/FireBase.initialize';

initializeAuth();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const useFirebase = () => {
  const[signUpError,setSignUpError] = useState([]);
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const [name,setName] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const SignInGoogle = () => {
   return( 
     signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        
      }).finally(()=>setIsLoading(false))
      )
  }



  const CreateUser = (email,password,name)=>{
    return(
      createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        setName(name);
        window.location.href = '/home';
      })
      .catch((error) => {  
        const errorMessage = error.message;
        if(errorMessage==="Firebase: Error (auth/email-already-in-use)."){
          setSignUpError("There is Already an Exsisting User with This Email !!!");
        }else{
          setSignUpError(errorMessage);
        }
       
      }).finally(()=>setIsLoading(false))
    )
  }
  const SignInWithEmail = (email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setUser(user);
    
    setIsLoading(false);
    window.location.href = '/home';
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    if(errorMessage==="Firebase: Error (auth/wrong-password).")
    {
      setError("Wrong Password !!! ")
    }else if(errorMessage==="Firebase: Error (auth/user-not-found)."){
      setError("User Not Found !!! ");
    }else{
      setError(errorMessage);
    }
  });
  }


const LogOut = ()=>{
    signOut(auth).then(() => {
        setUser({})
        window.location.href = '/home';
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        
      });
}

useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user);   
        }
        setIsLoading(false);
    })
},[user,name,isLoading])

return {
    user,
    SignInGoogle,
    LogOut,
    CreateUser,
    SignInWithEmail,
    name,
    isLoading,
    error,
    signUpError

}

};

export default useFirebase;
