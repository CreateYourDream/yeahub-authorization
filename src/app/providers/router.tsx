import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { AuthLayout, MainLayout } from "@app/layouts";
import { AuthProvider } from "./AuthProvider";
import { GuestProvider } from "./GuestProvider";

const RegisterPage = lazy(() =>
  import("@pages/RegisterPage").then((module) => ({ default: module.RegisterPage })),
);
const LoginPage = lazy(() =>
  import("@pages/LoginPage").then((module) => ({ default: module.LoginPage })),
);
const UserPage = lazy(() =>
  import("@pages/UserPage").then((module) => ({ default: module.UserPage })),
);
const HomePage = lazy(() =>
  import("@pages/HomePage").then((module) => ({ default: module.HomePage })),
);

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: '/', element: <MainLayout />,
        children: [
          { index: true, element: <Navigate to="/home" replace /> },
          { path: '/user', element: <UserPage /> },
          { path: '/home', element: <HomePage /> },
        ]
      },
    ],
  },
  {
    element: <GuestProvider />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
        ],
      },
    ],
  },
])