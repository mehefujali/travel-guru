import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
      return (
            <div>
                  <div className=" flex justify-center h-[100vh] items-center">
                          <div className=" w-11/12 mx-auto md:w-96 border-2 rounded p-8">
                              <h3 className=" text-2xl font-bold mb-10">Register</h3>
                              <form action="" className=" flex flex-col gap-8">

                                    <input type="text" 
                                    placeholder="Full Name"
                                    className=" w-full border-b border-black 
                                    focus:border-b focus:outline-none" />
                                    
                                    <input type="text" 
                                    placeholder="Username or Email"
                                    className=" w-full border-b border-black 
                                    focus:border-b focus:outline-none" />
                                    <input type="password" 
                                    placeholder="Passowrd"
                                    className=" w-full border-b border-black 
                                    focus:border-b focus:outline-none" />
                                    <input type="password" 
                                    placeholder="Conform Passowrd"
                                    className=" w-full border-b border-black 
                                    focus:border-b focus:outline-none" />
                                    <div className=" flex items-center justify-between">
                                          <label className=" flex items-center gap-2">
                                          <input type="checkbox" name="" id="" />
                                          Remember Me
                                          </label>
                                          <Link className=" underline text-yellow-500">Forgot Password ?</Link>
                                    </div>
                                    <button className=" btn bg-[#F9A51A]">Create Account</button>
                              </form>
                              <p className=" mt-2 text-center"> Already have an account? <Link to={'/login'} className=" underline text-yellow-500">Login</Link></p>
                              <div className=" divider">OR</div>
                              <div className=" text-3xl justify-center flex items-center gap-2 text-[#F9A51A]">
                              <FaGoogle  className=" cursor-pointer"></FaGoogle>
                              <FaFacebook className=" cursor-pointer"></FaFacebook>
                              </div>
                          </div>
                  </div>
            </div>
      );
};

export default Register;