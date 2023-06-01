import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home.jsx";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import Menu from "./Pages/Menu/Menu/Menu";
import Order from "./Pages/Order/Order/Order";
import Login from "./Pages/Register/Login/Login";
import SignUp from "./Pages/Register/SignUp/SignUp";
import AuthProvider from "./providers/AuthProvider";
import Secret from "./Pages/Shared/Secret/Secret";
import PrivateRoute from "./routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Layout/Dashboard";
import MyCart from "./Pages/Dashboard/MyCart/MyCart";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myCart",
        element: <MyCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
