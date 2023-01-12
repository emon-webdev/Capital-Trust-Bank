import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Apply from "../Pages/Apply/Apply";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Insurance from "../Pages/Insurance/Insurance";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
      {
        path: "/insurance",
        element: <Insurance />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
