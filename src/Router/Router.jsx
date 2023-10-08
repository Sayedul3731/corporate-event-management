import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import OurWorks from "../Pages/OurWorks/OurWorks";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Location from "../Pages/Location/Location";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/works",
        element: <OurWorks></OurWorks>
      },
      {
        path: "/location",
        element: <Location></Location>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;
