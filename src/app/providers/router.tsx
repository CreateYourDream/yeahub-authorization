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
const LearningPage = lazy(() =>
  import("@pages/LearningPage").then((module) => ({ default: module.LearningPage })),
);
const BlogPage = lazy(() =>
  import("@pages/BlogPage").then((module) => ({ default: module.BlogPage })),
);
const MentorsPage = lazy(() =>
  import("@pages/MentorsPage").then((module) => ({ default: module.MentorsPage })),
);
const ForgotPasswordPage = lazy(() =>
  import("@pages/ForgotPasswordPage").then((module) => ({ default: module.ForgotPasswordPage })),
);
const NotFoundPage = lazy(() =>
  import("@pages/NotFoundPage").then((module) => ({ default: module.NotFoundPage })),
);
const RouteErrorPage = lazy(() =>
  import("@pages/RouteErrorPage").then((module) => ({ default: module.RouteErrorPage })),
);

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: '/', element: <MainLayout />,
        children: [
          { index: true, element: <Navigate to="/home" replace /> },
          { path: '/user', element: <UserPage /> },
          { path: '/home', element: <HomePage /> },
          { path: '/learning', element: <LearningPage /> },
          { path: '/blog', element: <BlogPage /> },
          { path: '/mentors', element: <MentorsPage /> },
        ]
      },
    ],
  },
  {
    element: <GuestProvider />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
          { path: '/forgot-password', element: <ForgotPasswordPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])