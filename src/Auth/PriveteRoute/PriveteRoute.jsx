import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PriveteRoute = ({children}) => {
      const {user} = useContext (AuthContext)
      if(user){
            return children
      }
      return (
            <Navigate to={'/login'}></Navigate>
      );
};
PriveteRoute.propTypes = {
      children:PropTypes.object.isRequired
}
export default PriveteRoute;