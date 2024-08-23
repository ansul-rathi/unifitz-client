import React, { useEffect, useRef, useContext, useState } from "react";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "./AuthContextProvider";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/programs",
    display: "Programs",
  },
  {
    path: "/membership",
    display: "Membership",
  },
  {
    path: "/track",
    display: "Track your fitness",
  },
];

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { filter, setFilter } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogIn = () => {
    loginWithRedirect();
  };

  return (
    <header className="w-full h-20 leading-10 z-50 sticky top-0 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 md:px-10">
        <div className="flex items-center">
          <img src={logo} alt="Health & Fitness" className="h-10" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar} aria-label="Toggle navigation">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <h2 className="font-bold text-xl">Health & Fitness</h2>
          <nav>
            <ul className="flex items-center gap-6">
              {nav__links.map((item) => (
                <NavLink
                  className="font-semibold text-sm"
                  key={item.path}
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-x-6">
          {isAuthenticated && (
            <p className="font-semibold text-sm"> {user.name} </p>
          )}
          {isAuthenticated ? (
            <button
              className="border-none px-5 py-2 rounded text-sm font-medium cursor-pointer text-white bg-blue-500"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          ) : (
            <button
              className="border-none px-5 py-2 rounded text-sm font-medium cursor-pointer text-white bg-blue-500"
              onClick={handleLogIn}
            >
              Log In
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col">
          <div className="bg-white w-64 h-full p-4 shadow-lg">
            <button
              className="text-right mb-4"
              onClick={toggleNavbar}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav>
              <ul className="flex flex-col gap-4">
                {nav__links.map((item) => (
                  <NavLink
                    className="font-semibold text-lg text-black"
                    key={item.path}
                    to={item.path}
                    onClick={toggleNavbar}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </ul>
            </nav>
            <div className="mt-8">
              {isAuthenticated && (
                <p className="font-semibold text-sm mb-4"> {user.name} </p>
              )}
              {isAuthenticated ? (
                <button
                  className="w-full border-none px-5 py-2 rounded text-sm font-medium cursor-pointer text-white bg-blue-500"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="w-full border-none px-5 py-2 rounded text-sm font-medium cursor-pointer text-white bg-blue-500"
                  onClick={handleLogIn}
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
