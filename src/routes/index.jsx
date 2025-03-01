import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/home",
    //   element: <Home />,
    // },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
  ];

  // Define routes accessible only to authenticated users
  //    const routesForAuthenticatedOnly = [
  //     {
  //       path: "/admin/",
  //     //   element: redirect dashboard or 404 ,
  //     },
  //     {
  //       path: "/admin/*",
  //       element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
  //       children: [
  //         {
  //           path: "dashboard",
  //           element: <Dashboard />,
  //         },
  //       ],
  //     },
  //   ];

  // Define routes accessible only to non-authenticated users

  const routesForNotAuthenticatedOnly = [
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    // ...(!token ? routesForNotAuthenticatedOnly : []),
    // ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
