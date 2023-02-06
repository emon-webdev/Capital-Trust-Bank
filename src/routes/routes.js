import { createBrowserRouter } from "react-router-dom";
import { default as AllCustomers } from "../Dashboard/components/AllCustomers/AllCustomers";
import CardReq from "../Dashboard/components/CardReq/CardReq";

import MyTransaction from "../Dashboard/components/Customers/MyTransaction/MyTransaction";
import DashboardLayout from "../Dashboard/components/DashboardLayout/DashboardLayout";
import DeviceActivity from "../Dashboard/components/DeviceActivity/DeviceActivity";
import LoanReq from "../Dashboard/components/LoanReq/LoanReq.jsx";
import MyAccount from "../Dashboard/components/MyAccount/MyAccount";
import VerificationReq from "../Dashboard/components/VerificationReq/VerificationReq";
import Welcome from "../Dashboard/components/Welcome/Welcome";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AccountOpenFrom from "../Pages/AccountOpenFrom/AccountOpenFrom";
import Apply from "../Pages/Apply/Apply";
import Cards from "../Pages/Cards/Cards";
import Contact from "../Pages/Contact/Contact";
import ApplyForm from "../Pages/Home/ApplyForm";
import Home from "../Pages/Home/Home";
import BusinessInsurance from "../Pages/Insurance/BusinessInsurance";
import HealthInsurance from "../Pages/Insurance/HealthInsurance";
import Insurance from "../Pages/Insurance/Insurance";
import TravelInsurance from "../Pages/Insurance/TravelInsurance";
import Services from "../Pages/Services/Services";

import Error from "../Pages/Shared/Error";
import AdminRoute from "../routes/AdminRoute";
import CustomerRoute from "../routes/CustomerRoute";

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
        path: "/healthinsurance",
        element: <HealthInsurance />,
      },
      {
        path: "/travelinsurance",
        element: <TravelInsurance />,
      },
      {
        path: "/businessinsurance",
        element: <BusinessInsurance />,
      },

      {
        path: "/services",
        element: <Services />,
        loader: fetch(
          "https://capital-trust-bank-server.vercel.app/loanService"
        ),
      },
      {
        path: "/loanService/:id",
        element: <ApplyForm></ApplyForm>,
        loader: ({ params }) =>
          fetch(
            `https://capital-trust-bank-server.vercel.app/loanService/${params._id}`
          ),
      },
      // {
      //   path: "/goldloan",
      //   element: <GoldLoan />,
      // },
      // {
      //   path: "/educationloan",
      //   element: <EducationLoan />,
      // },
      // {
      //   path: "/marriageloan",
      //   element: <MarriageLoan />,
      // },
      // {
      //   path: "/vehicleloan",
      //   element: <VehicleLoan />,
      // },
      {
        path: "/cards",
        element: <Cards />,
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
        path: "/AccountOpenFrom",
        element: <AccountOpenFrom />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivetRout>
      <DashboardLayout />
      // </PrivetRout>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Welcome />,
      },
      {
        path: "/dashboard/allCustomers",
        element: (
          <AdminRoute>
            <AllCustomers></AllCustomers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/verificationRequest",
        element: (
          <AdminRoute>
            <VerificationReq></VerificationReq>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/cardRequest",
        element: (
          <AdminRoute>
            <CardReq></CardReq>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/loanRequest",
        element: (
          <AdminRoute>
            <LoanReq></LoanReq>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myTransaction",
        element: <MyTransaction />,
      },
      // {
      //   path: "/dashboard/my-balance",
      //   element: (
      //     <CustomerRoute>
      //       <MyBalance />
      //     </CustomerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/my-withdraw",
      //   element: (
      //     <CustomerRoute>
      //       <MyWithdraw />
      //     </CustomerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/my-deposit",
      //   element: (
      //     <CustomerRoute>
      //       <MyDeposit />
      //     </CustomerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/myAccount",
      //   element: <MyAccount />,
      // },
      {
        path: "/dashboard/deviceActivity",
        element: (
          <CustomerRoute>
            <DeviceActivity />
          </CustomerRoute>
        ),
      },
      {
        path: "/dashboard/myAccount",
        element: <MyAccount />,
      },
    ],
  },
]);

export default router;
