import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Blog from "../Pages/Blog/Blog";
import Content from "../Pages/Content/Content";
import Destination from "../Pages/Destination/Destination";
import DestinationDetails from "../Components/DestinationDetails/DestinationDetails";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path:'/',
                        element: <Navigate to={'/home'} replace></Navigate>
                  },
                  {
                        path: '/home',
                        element: <Home></Home>
                  },
                  {
                        path : 'news',
                        element: <News></News>
                  },
                  {
                        path: 'blog',
                        element: <Blog></Blog>
                  },
                  {
                        path: 'content',
                        element:<Content></Content>
                  },
                  {
                        path: 'destination',
                        element: <Destination></Destination>
                  },
                  {
                        path: 'home/destination/:id',
                        loader: ()=>  fetch('/destinations.json')          ,
                        element:<DestinationDetails></DestinationDetails>
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path:'register',
                        element: <Register></Register>
                  }
            ]
      }
])

export default router;