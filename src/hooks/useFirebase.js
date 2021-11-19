import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    
   //  observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                   
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));;
    }

  

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    


    return {
        isLoading,
        authError,
        user,
        signInWithGoogle,
        logOut

    }
}
export default useFirebase;