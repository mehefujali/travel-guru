import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PriveteRoute = ({children}) => {
      const {pathname} = useLocation()
     
      
      const {user} = useContext (AuthContext)
      if(user){
            return children
      }
      return (
            <Navigate state={pathname} to={'/login'}></Navigate>
      );
};
PriveteRoute.propTypes = {
      children:PropTypes.object.isRequired
}
export default PriveteRoute;