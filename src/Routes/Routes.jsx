import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomeScreen/Home";
import PrivacyPolicy from "../Components/privacy-policy/privacy-policy";
import Roots from "../Components/Root/Roots";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";

// Define routes for your application
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />, 
    children: [
      {
        path: "/", 
        element: <HomePage />,
      },
      {
        path: "/privacy-policy", 
        element: <PrivacyPolicy />,
      },
      {
        path: "/TermsAndConditions", 
        element: <TermsAndConditions />,
      },
    ],
  },
]);
