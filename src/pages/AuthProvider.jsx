import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firbase/firbase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(null)
    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Update Profile
    const updateUserProfile = (name , image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
          
    }
    // SignIn
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google SignIn
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //GitHub
    const gitProvider = new GithubAuthProvider();
    const gitLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    //logout
    const logOut = () => {
        setUser(null)
        signOut(auth)
        toast.success("Logout Successfully")
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser(null)
            }
            
        });
        return () => unsubscribe()
        
    }, [reload])
    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        gitLogin,
        logOut,
        updateUserProfile,
        setReload,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;