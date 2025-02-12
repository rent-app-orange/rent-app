// src/Component/Layout.jsx
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom"; 

function Layout({ children }) {
  const location = useLocation(); 
  const hideNavbar = location.pathname === "/Login" || location.pathname === "/Register";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div>{children}</div> {/* This will render the page content */}
    </div>
  );
}

export default Layout;
