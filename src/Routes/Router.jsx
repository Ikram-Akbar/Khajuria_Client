import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Location from "../Pages/Location/Location";
import Main from "../Layout/Main";
import SectionDetails from "../Pages/SectionDetails/SectionDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: "About",
          element: <About/>,
        },
        {
          path: "location",
          element: <Location/>,
        },
        {
          path: "section/:id",
          element: <SectionDetails />,
        },
      ]
    },
  ]);

export default router;