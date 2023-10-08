import {createContext } from "react"
import PropTypes from "prop-types"
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth"
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleProvider = new GoogleAuthProvider()
    const logInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
    }
    const signIn = (email, password)=> {
      return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        userCreate,
        signIn,
        logInWithGoogle,
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