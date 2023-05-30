import  { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
// import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, loggedInUser => {
      setUser(loggedInUser);
      setLoading(false)

    });
    return () => {
      unSubscribe();
    };
  }, []);

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn =()=>{
    return signInWithPopup(auth, githubProvider);
}

const LogOut = () => {
  setLoading(true);
  return signOut(auth)
}

  const authInfo = {
    user,
    registerUser,
    loading,
    loginUser,
    LogOut,
    googleSignIn,
    githubSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
