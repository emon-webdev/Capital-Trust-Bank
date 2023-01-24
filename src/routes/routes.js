import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Apply from "../Pages/Apply/Apply";
import Contact from "../Pages/Contact/Contact";
import ApplyForm from "../Pages/Home/ApplyForm";
import Home from "../Pages/Home/Home";
import Insurance from "../Pages/Insurance/Insurance";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import EducationLoan from "../Pages/Services/EducationLoan";
import GoldLoan from "../Pages/Services/GoldLoan";
import MarriageLoan from "../Pages/Services/MarriageLoan";
import Services from "../Pages/Services/Services";
import VehicleLoan from "../Pages/Services/VehicleLoan";
import Error from "../Pages/Shared/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        loader: fetch('http://localhost:5000/loans')
      },
      {
        path: "/loans/:id",
        element: <ApplyForm></ApplyForm>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/loans/${params.id}`
          ),
      },
      {
        path: "/goldloan",
        element: <GoldLoan />,
      },
      {
        path: "/educationloan",
        element: <EducationLoan />,
      },
      {
        path: "/marriageloan",
        element: <MarriageLoan />,
      },
      {
        path: "/vehicleloan",
        element: <VehicleLoan />,
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
