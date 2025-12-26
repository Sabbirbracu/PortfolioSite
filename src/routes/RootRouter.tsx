import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ArticlePage from "@/pages/ArticlePage";
import AdminLogin from "@/pages/AdminLogin";
import ForgotPassword from "@/pages/ForgotPassword";
import Dashboard from "@/pages/admin/Dashboard";
import Projects from "@/pages/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define all application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
