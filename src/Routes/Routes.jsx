import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx/MainLayout";
import Home from "../Pages/Home";
import Error from "../Error/Error";
import AllApplications from "../Pages/AllApplications";
import Installed from "../Pages/Installed";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading....</p>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("./appData.json"),
      },
      {
        path: "/applications",
        element: <AllApplications></AllApplications>,
      },
      {
        path: "/installed",
        element: <Installed></Installed>,
      },
      {
        path: "/applications/:id",
        element: <AppDetails></AppDetails>,
      },
    ],
  },
  // {
  //   path: "*",
  //   element:<Error></Error>
  // },
]);

export default router;
