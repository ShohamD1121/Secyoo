import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import Sweeper from "./pages/Sweeper";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/Secyoo",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <div>
            <Main />
            <Sweeper />
          </div>
        ),
      },
      // {
      //   path: "",
      //   element: <Sweeper />,
      // },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
