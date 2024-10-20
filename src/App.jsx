import React from "react";
import Com from "./pages/Com";
import {
  createBrowserRouter,
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomeComponent from "./pages/home-component/HomeComponent";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeComponent />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
