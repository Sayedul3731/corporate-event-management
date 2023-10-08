import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth"
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe();
    }
  }, [])

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const userCreate = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const googleProvider = new GoogleAuthProvider()
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authInfo = {
    userCreate,
    signIn,
    logInWithGoogle,
    user,
    loading,
    logOut,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}
export default AuthProvider;