import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
      const {state} = useLocation()
     
      
      const {googleSignIn,setUser,user} = useContext(AuthContext)
      const handleGoogleSignIn = () => {
            googleSignIn()
            .then(user => setUser(user.user))
            .catch(err => console.log(err))
      }
      if(user){
            return <Navigate to={state||'/home'}></Navigate>
      }
      return (
            <div>
                  <div className=" flex justify-center h-[100vh] items-center">
                          <div className=" w-11/12 mx-auto md:w-96 border-2 rounded p-8">
                              <h3 className=" text-2xl font-bold mb-10">Login</h3>
                              <form action="" className=" flex flex-col gap-8">

                                    <input type="text" 
                                    placeholder="Username or Email"
                                    className=" w-full border-b border-black 
                                    focus:border-b focus:outline-none" />
                                    <input type="text" 
                                    placeholder="Passowrd"
                                    className=" w-full border-b border-black 
                                    focus:border-b focus:outline-none" />
                                    <div className=" flex items-center justify-between">
                                          <label className=" flex items-center gap-2">
                                          <input type="checkbox" name="" id="" />
                                          Remember Me
                                          </label>
                                          <Link className=" underline text-yellow-500">Forgot Password ?</Link>
                                    </div>
                                    <button className=" btn bg-[#F9A51A]">Login</button>
                              </form>
                              <p className=" mt-2 text-center"> Don’t have an account? <Link to={'/register'} className=" underline text-yellow-500">Create an account</Link></p>
                              <div className=" divider">OR</div>
                              <div className=" text-3xl justify-center flex items-center gap-2 text-[#F9A51A]">
                              <FaGoogle onClick={handleGoogleSignIn}  className=" cursor-pointer"></FaGoogle>
                              <FaFacebook className=" cursor-pointer"></FaFacebook>
                              </div>
                          </div>
                  </div>
            </div>
      );
};

export default Login;