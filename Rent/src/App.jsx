import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Userprofile,
  Createapartment,
  Propertydetils,
  Dashboard,
  Contact,
  About,
  Wishlist,
  Virtualtour,
  Cheackout,
} from "./Component/exports";
function App() {
  const router = createBrowserRouter([
    {
      path: "/", // 1
      element: <Home />,
      errorElement: <Notfound />,
    },
    {
      path: "/Login", // 2
      element: <Login />,
    },
    {
      path: "/Register", // 3
      element: <Register />,
    },
    {
      path: "/Userprofile", // 4
      element: <Userprofile />,
    },
    {
      path: "/About", // 5
      element: <About />,
    },
    {
      path: "/Wishlist", // 6
      element: <Wishlist />,
    },
    {
      path: "/Propertydetils", // 7
      element: <Propertydetils />,
    },
    {
      path: "/Dashboard", // 8
      element: <Dashboard />,
    },
    {
      path: "/Createapartment", // 9
      element: <Createapartment />,
    },
    {
      path: "/contact", // 10
      element: <Contact />,
    },

    {
      path: "/Virtualtour", // 11
      element: <Virtualtour />,
    },

    {
      path: "/Cheackout", // 12
      element: <Cheackout />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
