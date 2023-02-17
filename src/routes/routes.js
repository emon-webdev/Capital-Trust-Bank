import { createBrowserRouter } from "react-router-dom";
import { default as AllCustomers } from "../Dashboard/components/AllCustomers/AllCustomers";
import CreditCardReq from "../Dashboard/components/CreditCardReq/CreditCardReq";
import MyAccount from "../Dashboard/components/Customers/MyAccount/MyAccount";
import MyDeposit from "../Dashboard/components/Customers/MyDeposit/MyDeposit";
import MyTransaction from "../Dashboard/components/Customers/MyTransaction/MyTransaction";
import MyWithdraw from "../Dashboard/components/Customers/MyWithdraw/MyWithdraw";
import TakeCard from "../Dashboard/components/Customers/TakeCard/TakeCard";
import CustomerSupport from "../Dashboard/components/CustomerSupport/CustomerSupport";
import DashboardLayout from "../Dashboard/components/DashboardLayout/DashboardLayout";
import DeviceActivity from "../Dashboard/components/DeviceActivity/DeviceActivity";
import AllBills from "../Dashboard/components/Donate/AllBills";
import AllDonate from "../Dashboard/components/Donate/AllDonate";
import IndividualSupport from "../Dashboard/components/IndividualSupport/IndividualSupport";
import LoanReq from "../Dashboard/components/LoanReq/LoanReq.jsx";
import VerificationDetails from "../Dashboard/components/VerificationReq/VerificationDetails";

import VerificationReq from "../Dashboard/components/VerificationReq/VerificationReq";
import Welcome from "../Dashboard/components/Welcome/Welcome";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AccountOpenFrom from "../Pages/AccountOpenFrom/AccountOpenFrom";
import Apply from "../Pages/Apply/Apply";
import Cards from "../Pages/Cards/Cards";
import Contact from "../Pages/Contact/Contact";
import FaqPage from "../Pages/FaqPage/FaqPage";
import DonateFail from "../Pages/Funds/DonateFail";
import DonateSuccess from "../Pages/Funds/DonateSuccess";
import ApplyForm from "../Pages/Home/ApplyForm";
import DetailsNews from "../Pages/Home/DetailsNews";
import Home from "../Pages/Home/Home";
import TeamDetails from "../Pages/Home/TeamDetails";
import BusinessInsurance from "../Pages/Insurance/BusinessInsurance";
import HealthInsurance from "../Pages/Insurance/HealthInsurance";
import TravelInsurance from "../Pages/Insurance/TravelInsurance";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import PayFail from "../Pages/PaymentBills/PayFail";
import PaymentBills from "../Pages/PaymentBills/PaymentBills";
import PaySuccess from "../Pages/PaymentBills/PaySuccess";
import LoanDetails from "../Pages/Services/Loans/LoanDetails";
import Loans from "../Pages/Services/Loans/Loans";

import InsuranceRequest from "../Dashboard/components/InsuranceRequest/InsuranceRequest";
import Insurance from "../Pages/Services/Insurance";
import InsuranceDetails from "../Pages/Services/InsuranceDetails";
import Error from "../Pages/Shared/Error";
import FactToKnow from "../Pages/Shared/FactToKnow/FactToKnow";
import AdminRoute from "../routes/AdminRoute";
import CustomerRoute from "../routes/CustomerRoute";
import PrivetRoute from "./PrivateRoute/PrivateRoute";
// import PrivetRoute from "./PrivetRoute/PrivetRoute";

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
        path: "/insurances",
        element: <Insurance />,
        loader: () =>
          fetch("https://capital-trust-bank-server.vercel.app/insuranceData"),
      },
      {
        path: "/insuranceDetails/:id",
        element: <InsuranceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://capital-trust-bank-server.vercel.app/insur/${params.id}`
          ),
      },

      // {
      //   path: "/services",
      //   element: <Services />,
      // },
      {
        path: "/loansServices",
        element: <Loans />,
        loader: () =>
          fetch("https://capital-trust-bank-server.vercel.app/loanService"),
      },
      {
        path: "/loanDetails/:id",
        element: <LoanDetails />,
        loader: ({ params }) =>
          fetch(
            `https://capital-trust-bank-server.vercel.app/loanSec/${params.id}`
          ),
      },
      {
        path: "/blogsNews/:id",
        element: <DetailsNews></DetailsNews>,
        loader: ({ params }) =>
          fetch(
            `https://capital-trust-bank-server.vercel.app/blogsNews/${params.id}`
          ),
      },

      {
        path: "/loans/:title",
        element: <ApplyForm />,
        loader: ({ params }) =>
          fetch(
            `https://capital-trust-bank-server.vercel.app/loans/${params.title}`
          ),
      },

      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: "createAction",
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/factToKnow",
        element: <FactToKnow></FactToKnow>,
      },
      {
        path: "/AccountOpenFrom",
        element: (
          <PrivetRoute>
            <AccountOpenFrom />
          </PrivetRoute>
        ),
      },
      {
        path: "/donate/success",
        element: <DonateSuccess />,
      },
      {
        path: "/donate/fail",
        element: <DonateFail />,
      },

      {
        path: "/paymentbills",
        element: <PaymentBills />,
      },
      {
        path: "/pay-bills/success",
        element: <PaySuccess />,
      },
      {
        path: "/pay-bills/fail",
        element: <PayFail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/team-details/:id",
        element: <TeamDetails />,
        loader: async ({ params }) =>
          fetch(
            `https://capital-trust-bank-server.vercel.app/team-details/${params.id}`
          ),
      },
      // {
      //   path: "/exchange",
      //   element: <ExchangeDetails />,
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
        path: "/dashboard/verificationRequest/details",
        element: (
          <AdminRoute>
            <VerificationDetails></VerificationDetails>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/cardRequest",
        element: (
          <AdminRoute>
            <CreditCardReq></CreditCardReq>
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
        path: "/dashboard/all-donate",
        element: (
          <AdminRoute>
            <AllDonate />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-bills",
        element: (
          <AdminRoute>
            <AllBills />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myTransaction",
        element: <MyTransaction />,
      },
      {
        path: "/dashboard/CustomerSupport",
        element: <CustomerSupport />,
      },
      {
        path: "/dashboard/my-withdraw",
        element: (
          <CustomerRoute>
            <MyWithdraw />
          </CustomerRoute>
        ),
      },
      {
        path: "/dashboard/my-deposit",
        element: (
          <CustomerRoute>
            <MyDeposit />
          </CustomerRoute>
        ),
      },
      {
        path: "/dashboard/CustomerSupport/admin",
        element: <IndividualSupport />,
      },
      {
        path: "/dashboard/deviceActivity",
        element: <DeviceActivity />,
      },
      {
        path: "/dashboard/myAccount",
        element: <MyAccount />,
      },
      {
        path: "/dashboard/takeCard",
        element: <TakeCard />,
      },
      {
        path: "/dashboard/insuranceRequest",
        element: <InsuranceRequest />,
      },
    ],
  },
]);

export default router;
