import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Components/Main";
import Login from "../Components/Login"
import Signup from "../Components/Signup";
import Booking from "../Components/Booking";
import PrivateRoute from "./PrivateRoute";
import News from "../News/News";
import Catagories from "../News/Catagories";
  

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
              path : "/catagory/:id" ,
              element : <Catagories></Catagories> ,
              loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`) 
            
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
            },
            {
              path : "/news" ,
              element :  <News></News>
            },
        ]
    }

  ])
