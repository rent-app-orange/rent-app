import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import logo from "../assets/Screenshot 2025-02-11 214307.png";
import owner from "../assets/sign-form.png";
import Form from "./Form";
import { getDatabase } from "firebase/database";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false); // حالة الفورم
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <span className="text-[#EC8305] text-2xl font-bold">HabiRent</span>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-center items-center space-x-6 text-gray-700 text-lg font-medium">
          <Link to="/" className="hover:text-[#EC8305] transition duration-300">
            Home
          </Link>
          <Link
            to="/FindaStay"
            className="hover:text-[#EC8305] transition duration-300"
          >
            Find a Stay
          </Link>
          <Link
            to="/about"
            className="hover:text-[#EC8305] transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#EC8305] transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* User Options */}
        <div className="flex items-center space-x-4 relative">
          {/* زر لعرض الفورم */}
          <button className="relative" onClick={toggleForm}>
            <img src={owner} alt="Owner Icon" className="h-10 cursor-pointer" />
          </button>

          {/* إظهار الفورم عند النقر على الزر */}
          {isFormOpen && (
            <div className="absolute top-14 right-0 w-[500px] bg-white shadow-lg p-4 rounded-lg z-50">
              <Form />
            </div>
          )}

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="flex items-center border rounded-full px-3 py-2 hover:shadow-md transition focus:outline-none"
              onClick={toggleDropdown}
              onBlur={closeDropdown}
              ref={dropdownRef}
              tabIndex={0}
            >
              <Menu className="w-5 h-5 mr-2 text-gray-700" />
              <User className="w-6 h-6 text-gray-700" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                <Link
                  to="/Register"
                  className="block px-4 py-2 hover:bg-[#EC8305] hover:text-white transition"
                >
                  Sign up
                </Link>
                <Link
                  to="/Login"
                  className="block px-4 py-2 hover:bg-[#EC8305] hover:text-white transition"
                >
                  Log in
                </Link>
                <hr className="my-1" />
                <Link
                  to="/Userprofile"
                  className="block px-4 py-2 hover:bg-[#EC8305] hover:text-white transition"
                >
                  User Profile
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-[#EC8305] hover:text-white transition"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-[#EC8305] hover:text-white transition"
                >
                  About us
                </Link>
                <Link
                  to="/help-center"
                  className="block px-4 py-2 hover:bg-[#EC8305] hover:text-white transition"
                >
                  Help Center
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
