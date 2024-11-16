import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

      const googleProvider = new GoogleAuthProvider()
      const googleSignIn = () => {
             return signInWithPopup(auth,googleProvider)
      }
      const authprovide = {
            googleSignIn
      }
      return (
            <AuthContext.Provider value={authprovide}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
      children:PropTypes.object.isRequired
}

export default AuthProvider;