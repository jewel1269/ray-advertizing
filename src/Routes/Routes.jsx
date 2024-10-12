import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomeScreen/Home";

// Define routes for your application
export const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
      ],
    },
  ]);