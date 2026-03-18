import { createBrowserRouter } from "react-router";
import App from "../App";
import { Login } from "../../features/login/login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])