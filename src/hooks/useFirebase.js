import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    getAuth
   } from "firebase/auth";




initializeFirebase()

const useFirebase= ()=>{
    const [user, setUser]= useState({});
    const [authError, setAuthError] = useState('');
    const[isloading, setIsLoading]= useState(true);



      const auth = getAuth();
      const googleProvider = new GoogleAuthProvider();

    // google login
    const signInUsingGoogle = (location, navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser( result.user);
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }


    // observe
    useEffect(() => {
        const unsubcribed= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser({})
          }
          setIsLoading(false)
        });
        return ()=>unsubcribed;
      }, []);

      const logout = ()=>{
        setIsLoading(true)
          signOut(auth)
          .then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false));
      };


    

      return{
          user,
          isloading,
          logout,
          signInUsingGoogle
      }


}


export default useFirebase;