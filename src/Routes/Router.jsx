import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Location from "../Pages/Location/Location";
import Main from "../Layout/Main";

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
      ]
    },
  ]);

export default router;