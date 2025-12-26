import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ArticlePage from "@/pages/ArticlePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define all application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
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
