// src/Component/Layout.jsx
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar /> {/* Navbar will appear on every page */}
      <div>{children}</div> {/* This will render the page content */}
    </div>
  );
}

export default Layout;
