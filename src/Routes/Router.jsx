import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import Login from "../components/Authentication/LogIn/Login";
import Register from "../components/Authentication/Register/Register";
import Chakout from "../components/Pages/Chakout/Chakout";
import Bookservices from "../components/Pages/BookServices/Bookservices";


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
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Login></Login>,
      },
      {
        path: "/book/:id",
        element: <Bookservices></Bookservices>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/chakout/:id",
        element: <Chakout></Chakout>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
