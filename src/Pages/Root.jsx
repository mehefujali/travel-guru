import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";


const Root = () => {
      return (
            <div>
                  <nav className=" w-full  absolute ">
                        <Nav></Nav>
                  </nav>

                  <Outlet></Outlet>
            </div>
      );
};

export default Root;