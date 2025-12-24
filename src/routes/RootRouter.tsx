import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define all application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  // Add more routes here as needed
  // Example:
  // {
  //   path: "/projects",
  //   element: <Projects />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
