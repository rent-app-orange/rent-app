import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { Globe, Menu, User } from "lucide-react";


  function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchValues, setSearchValues] = useState({
      location: "",
      checkIn: "",
      checkOut: "",
      guests: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setSearchValues({ ...searchValues, [name]: value });
    };

    return (
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 mr-2" />
            <span className="text-red-500 text-2xl font-bold">HabiRent</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full md:w-3/5 lg:w-2/5 space-x-2 mb-4 md:mb-0">
            <input
              type="text"
              name="location"
              placeholder="Where"
              value={searchValues.location}
              onChange={handleChange}
              className="outline-none px-2 w-full"
            />
            <span className="border-r border-gray-300 h-6"></span>
            <input
              type="text"
              name="checkIn"
              placeholder="Check-in"
              value={searchValues.checkIn}
              onChange={handleChange}
              className="outline-none px-2 w-full"
            />
            <span className="border-r border-gray-300 h-6"></span>
            <input
              type="text"
              name="checkOut"
              placeholder="Check-out"
              value={searchValues.checkOut}
              onChange={handleChange}
              className="outline-none px-2 w-full"
            />
            <button className="bg-red-500 text-white rounded-full px-4 py-2">
              Search
            </button>
          </div>

          {/* User Options */}
          <div className="flex items-center space-x-4 relative">
            <Link
              to="/your-home"
              className="text-gray-600 hidden md:block hover:text-black"
            >
              Airbnb your home
            </Link>

            <div className="relative">
              <Globe className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black" />
            </div>

            <div className="relative">
              <button
                className="flex items-center border rounded-full p-2 hover:shadow-md transition"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <Menu className="w-5 h-5 mr-2" />
                <User className="w-6 h-6" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-lg py-2">
                  <Link
                    to="/signup"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Log in
                  </Link>
                  <hr className="my-1" />
                  <Link
                    to="/gift-cards"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Gift cards
                  </Link>
                  <Link
                    to="/your-home"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Airbnb your home
                  </Link>
                  <Link
                    to="/host-experience"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Host an experience
                  </Link>
                  <Link
                    to="/help-center"
                    className="block px-4 py-2 hover:bg-gray-100"
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
