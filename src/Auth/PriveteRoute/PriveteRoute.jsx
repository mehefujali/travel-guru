import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PriveteRoute = ({children}) => {
      const {pathname} = useLocation()
     
      
      const {user,loading} = useContext (AuthContext)
      if(user){
            return children
      }
      if(loading){
            return <div className=" w-full h-[100vh]">
              <span className="loading fixed top-1/2 left-1/2 loading-spinner loading-lg"></span>
            </div>
      }
      return (
            <Navigate state={pathname} to={'/login'}></Navigate>
      );
};
PriveteRoute.propTypes = {
      children:PropTypes.object.isRequired
}
export default PriveteRoute;