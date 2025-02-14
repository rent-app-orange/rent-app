import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout"; // Import Layout component
import {
  Home,
  Login,
  Register,
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
      element: (
        <Layout>
          <Home />
        </Layout>
      ), // Wrap Home in Layout
    },
    {
      path: "/Login", // 2
      element: (
        <Layout>
          <Login />
        </Layout>
      ), // Wrap Login in Layout
    },
    {
      path: "/Register", // 3
      element: (
        <Layout>
          <Register />
        </Layout>
      ), // Wrap Register in Layout
    },
    {
      path: "/Userprofile", // 4
      element: (
        <Layout>
  
        </Layout>
      ), // Wrap Userprofile in Layout
    },
    {
      path: "/About", // 5
      element: (
        <Layout>
          <About />
        </Layout>
      ), // Wrap About in Layout
    },
    {
      path: "/Wishlist", // 6
      element: (
        <Layout>
          <Wishlist />
        </Layout>
      ), // Wrap Wishlist in Layout
    },
    {
      path: "/Propertydetails", // 7
      element: (
        <Layout>
          <Propertydetils />
        </Layout>
      ), // Wrap Propertydetils in Layout
    },
    {
      path: "/Dashboard", // 8
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ), // Wrap Dashboard in Layout
    },
    {
      path: "/Createapartment", // 9
      element: (
        <Layout>
          <Createapartment />
        </Layout>
      ), // Wrap Createapartment in Layout
    },
    {
      path: "/contact", // 10
      element: (
        <Layout>
          <Contact />
        </Layout>
      ), // Wrap Contact in Layout
    },
    {
      path: "/Virtualtour", // 11
      element: (
        <Layout>
          <Virtualtour />
        </Layout>
      ), // Wrap Virtualtour in Layout
    },
    {
      path: "/Cheackout", // 12
      element: (
        <Layout>
          <Cheackout />
        </Layout>
      ), // Wrap Cheackout in Layout
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
