import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import Login from "../components/Authentication/LogIn/Login";
import Register from "../components/Authentication/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/contact",
        element: <Login></Login>
      },
      
    ],
  },
]);

export default router;
