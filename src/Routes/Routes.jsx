import {
    createBrowserRouter,
   
  } from "react-router-dom";
//   import "./index.css";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
    export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>,

        }
      ]
    },
  ]);