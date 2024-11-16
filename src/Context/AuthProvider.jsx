import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const googleProvider = new GoogleAuthProvider()
      const googleSignIn = () => {
            return signInWithPopup(auth, googleProvider)
      }
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (curentuser) => {
                  setUser(curentuser)
            })
            return () => unSubscribe()
      }, [])
      const authprovide = {
            googleSignIn,
            user,
            setUser,
      }
      
      
      return (
            <AuthContext.Provider value={authprovide}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.object.isRequired
}

export default AuthProvider;