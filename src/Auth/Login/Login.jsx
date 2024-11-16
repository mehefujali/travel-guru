import { Link } from "react-router-dom";


const Login = () => {
      return (
            <div>
                  <div className=" flex justify-center h-[100vh] items-center">
                          <div className=" w-96 border-2 rounded p-8">
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
                              <p className=" mt-2 text-center"> Don’t have an account? <Link className=" underline text-yellow-500">Create an account</Link></p>
                          </div>
                  </div>
            </div>
      );
};

export default Login;