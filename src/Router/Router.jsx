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
import ServiceCardDetails from "../components/Service/ServiceCardDetails";
import PrivetRoute from "./PrivetRoute";
import ClientFeedback from "../Pages/ClientFeedback/ClientFeedback";
import TeamMembers from "../Pages/TeamMembers/TeamMembers";
import WorkCardDetails from "../Pages/OurWorks/WorkCardDetails";
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
        path: "/serviceCard/:id",
        element: <PrivetRoute><ServiceCardDetails></ServiceCardDetails></PrivetRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/works",
        element: <OurWorks></OurWorks>
      },
      {
        path: "/workCard/:id",
        element: <PrivetRoute><WorkCardDetails></WorkCardDetails></PrivetRoute>,
        loader: () => fetch('/worked.json')
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
      },
      {
        path: "/clientFeedback",
        element: <PrivetRoute><ClientFeedback></ClientFeedback></PrivetRoute>,
        loader: () => fetch('/feedback.json')
      },
      {
        path: "/members",
        element: <PrivetRoute><TeamMembers></TeamMembers></PrivetRoute>,
        loader: () => fetch('/team.json')
      }
    ]
  },
]);

export default router;
