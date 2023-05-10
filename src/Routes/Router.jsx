import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
