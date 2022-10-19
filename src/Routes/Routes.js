import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Components/Main";
import Login from "../Components/Login"
import Signup from "../Components/Signup";
import Booking from "../Components/Booking";
import PrivateRoute from "./PrivateRoute";
  

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main> </Main> ,
        children:[

            {
               path : "/" ,
               element : <Home></Home> ,
              
            },
            {
              path : 'login',
              element : <Login></Login>
            },
            {
              path : "/signup" ,
              element :  <Signup></Signup>
            },
            {
              path : "/booking" ,
              element : <PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    }

  ])
