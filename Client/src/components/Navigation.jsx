import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";
import coatOfArms from "../assets/images/Coat-of-Arms.webp";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobilePortalsOpen, setMobilePortalsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="py-2 text-sm text-white bg-primary">
        <div className="flex flex-wrap items-center justify-between px-2 mx-auto max-w-7xl">
          {/* Contact Info */}
          <div className="flex flex-wrap">
            <a
              href="tel:+254721415851"
              className="flex items-center mr-4 hover:text-white/80"
            >
              <FaPhoneAlt className="mr-1" />
              +254 721 415 851
            </a>

            <a
              href="mailto:info@kimangusecondary.sc.ke"
              className="flex items-center hover:text-white/80"
            >
              <FaEnvelope className="mr-1" />
              info@kimangusecondary.sc.ke
            </a>
          </div>

          {/* Social Links */}
          <div className="flex mt-1 space-x-4 sm:mt-0">
            <a
              href="https://www.facebook.com/groups/616158830286938/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="hover:text-white/80"
            >
              <FaFacebook />
            </a>

            <span
              className="opacity-50 cursor-not-allowed"
              title="TikTok (Coming Soon)"
            >
              <FaTiktok />
            </span>

            <span
              className="opacity-50 cursor-not-allowed"
              title="YouTube (Coming Soon)"
            >
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/src/assets/images/Coat-of-Arms.webp"
                alt="school logo"
                className="h-12 mr-2 md:hidden"
              />
              <img
                src={logo}
                alt="school logo"
                className="h-12"
              />

              <div>
                <h1 className="hidden font-bold text-primary lg:block sm:text-2xl">
                  Kimangu Day Sec. School
                </h1>
                <h1 className="hidden font-bold text-primary md:block lg:hidden sm:text-2xl">
                  K.D.S.S
                </h1>
                <h1 className="font-bold text-primary md:hidden sm:text-2xl">
                  Kimangu Day Sec Sch
                </h1>
                <p className="text-xs font-medium text-gray-600">Aim High</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 cursor-pointer md:hidden"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="items-center hidden space-x-6 font-medium md:flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-1 hover:text-primary hover:border-b-2 border-primary ${
                      isActive ? "text-primary border-b-2 border-primary" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `py-1 hover:text-primary hover:border-b-2 border-primary ${
                      isActive ? "text-primary border-b-2 border-primary" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admissions"
                  className={({ isActive }) =>
                    `py-1 hover:text-primary hover:border-b-2 border-primary ${
                      isActive ? "text-primary border-b-2 border-primary" : ""
                    }`
                  }
                >
                  Admissions
                </NavLink>
              </li>

              {/* Single Departments Link */}
              <li>
                <NavLink
                  to="/departments"
                  className={({ isActive }) =>
                    `py-1 hover:text-primary hover:border-b-2 border-primary ${
                      isActive ? "text-primary border-b-2 border-primary" : ""
                    }`
                  }
                >
                  Departments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `py-1 hover:text-primary hover:border-b-2 border-primary ${
                      isActive ? "text-primary border-b-2 border-primary" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* Portals Dropdown */}
              <li className="relative group">
                <button className="flex items-center py-1 hover:text-primary">
                  Portals <i className="ml-1 text-xs fas fa-chevron-down"></i>
                </button>
                <ul className="absolute right-0 z-50 hidden w-32 bg-white border border-gray-300 rounded-md shadow-md group-hover:block">
                  <li>
                    <Link
                      to="/parent-login"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fas fa-user-friends text-primary"></i>
                      Parent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student-login"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fas fa-graduation-cap text-primary"></i>
                      Student
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/teacher-login"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fas fa-chalkboard-teacher text-primary"></i>
                      Teacher
                    </Link>
                  </li>
                </ul>
              </li>

              {/* More Dropdown */}
              <li className="relative group">
                <button className="flex items-center py-1 hover:text-primary">
                  More <i className="ml-1 text-xs fas fa-chevron-down"></i>
                </button>
                <ul className="absolute right-0 z-50 hidden bg-white border border-gray-300 rounded-md shadow-md w-44 group-hover:block">
                  <li>
                    <Link
                      to="/careers"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fa-solid fa-briefcase text-primary"></i>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tenders"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fa-solid fa-file-signature text-primary"></i>
                      Tenders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fa-solid fa-photo-film text-primary"></i>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news-and-events"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <i className="mr-2 fa-solid fa-newspaper text-primary"></i>
                      News & Events
                    </Link>
                  </li>
                </ul>
              </li>

              <img
                src={coatOfArms}
                alt="Kenya Coat of Arms"
                className="h-12"
              />
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/src/assets/images/logo.png"
                alt="school logo"
                className="h-20 mb-2"
              />
              <h2 className="text-xl font-bold text-primary">
                Kimangu Day Sec
              </h2>
              <p className="text-xs font-medium text-gray-600">Aim High</p>
            </div>

            <ul className="flex flex-col space-y-4 font-medium">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Single Departments Link in Mobile */}
              <li>
                <NavLink
                  to="/departments"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`
                  }
                >
                  Departments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admissions"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`
                  }
                >
                  Admissions
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* Mobile Portals Dropdown */}
              <li className="py-2">
                <button
                  onClick={() => setMobilePortalsOpen(!mobilePortalsOpen)}
                  className="flex items-center justify-between w-full cursor-pointer hover:text-primary"
                >
                  Portals
                  <i
                    className={`ml-1 text-xs fas fa-chevron-down transition-transform ${
                      mobilePortalsOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {mobilePortalsOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link
                        to="/parent-login"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobilePortalsOpen(false);
                        }}
                        className="flex items-center py-2 hover:text-primary"
                      >
                        <i className="mr-2 fas fa-user-friends text-primary"></i>
                        Parent
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/student-login"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobilePortalsOpen(false);
                        }}
                        className="flex items-center py-2 hover:text-primary"
                      >
                        <i className="mr-2 fas fa-graduation-cap text-primary"></i>
                        Student
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/teacher-login"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobilePortalsOpen(false);
                        }}
                        className="flex items-center py-2 hover:text-primary"
                      >
                        <i className="mr-2 fas fa-chalkboard-teacher text-primary"></i>
                        Teacher
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile More Dropdown */}
              <li className="py-2">
                <button
                  onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                  className="flex items-center justify-between w-full cursor-pointer hover:text-primary"
                >
                  More
                  <i
                    className={`ml-1 text-xs fas fa-chevron-down transition-transform ${
                      mobileMoreOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {mobileMoreOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link
                        to="/careers"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileMoreOpen(false);
                        }}
                        className="block py-2 hover:text-primary"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tenders"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileMoreOpen(false);
                        }}
                        className="block py-2 hover:text-primary"
                      >
                        Tenders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileMoreOpen(false);
                        }}
                        className="block py-2 hover:text-primary"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news-and-events"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileMoreOpen(false);
                        }}
                        className="block py-2 hover:text-primary"
                      >
                        News & Events
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Contact in Mobile */}
            <div className="pt-6 mt-8 mb-20 border-t border-gray-200">
              <h3 className="mb-3 text-sm font-semibold text-gray-500">
                Contact Us
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+254721415851"
                  className="flex items-center text-sm text-gray-600 hover:text-primary"
                >
                  <i className="mr-2 fas fa-phone"></i> +254 721 415 851
                </a>
                <a
                  href="mailto:info@kimangusecondary.sc.ke"
                  className="flex items-center text-sm text-gray-600 hover:text-primary"
                >
                  <i className="mr-2 fas fa-envelope"></i>{" "}
                  info@kimangusecondary.sc.ke
                </a>
              </div>

              <div className="flex mt-4 space-x-4">
                <a
                  href="https://www.facebook.com/groups/616158830286938/"
                  className="text-gray-500 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 opacity-50 cursor-not-allowed"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 opacity-50 cursor-not-allowed"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 opacity-50 cursor-not-allowed"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
