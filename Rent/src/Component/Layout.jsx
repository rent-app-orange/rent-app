// src/Component/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot  from "../Component/chatbot";



function Layout({ children }) {
  return (
    <div>
      <Navbar /> {/* Navbar will appear on every page */}
      <div>{children}</div> {/* This will render the page content */}
   
   <Chatbot/>
   <Footer/>
    </div>
  );
}

export default Layout;
