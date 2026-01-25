import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaUserFriends,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
  FaFileSignature,
  FaCamera,
  FaNewspaper,
  FaFileContract,
} from "react-icons/fa";
import { MdExpandMore, MdClose } from "react-icons/md";

import logo from "../assets/images/logo.png";
import coatOfArms from "../assets/images/Coat-of-Arms.webp";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobilePortalsOpen, setMobilePortalsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
          <div className="hidden md:flex mt-1 space-x-4 sm:mt-0">
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
      <nav className="sticky top-0 z-50 bg-white shadow px-2 md:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={coatOfArms}
                alt="Kenya Coat of Arms"
                className="h-12 mr-2 md:hidden"
              />
              <img src={logo} alt="KDSS School Logo" className="h-12" />

              <div>
                <h1 className="hidden font-bold text-primary lg:block sm:text-2xl">
                  Kimangu Day Sec. School
                </h1>
                <h1 className="hidden font-bold text-primary md:block lg:hidden sm:text-2xl">
                  K.D.S.S
                </h1>
                <h1 className="font-bold text-primary md:hidden sm:text-2xl">
                  K.D.S.S
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
                  Portals <MdExpandMore className="ml-1" />
                </button>
                <ul className="absolute right-0 z-50 hidden w-32 bg-white border border-gray-300 rounded-md shadow-md group-hover:block">
                  <li>
                    <Link
                      to="/parent-login"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaUserFriends className="mr-2 text-primary" />
                      Parent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student-login"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaGraduationCap className="mr-2 text-primary" />
                      Student
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/teacher-login"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaChalkboardTeacher className="mr-2 text-primary" />
                      Teacher
                    </Link>
                  </li>
                </ul>
              </li>

              {/* More Dropdown */}
              <li className="relative group">
                <button className="flex items-center py-1 hover:text-primary">
                  More <MdExpandMore className="ml-1" />
                </button>
                <ul className="absolute right-0 z-50 hidden bg-white border border-gray-300 rounded-md shadow-md w-44 group-hover:block">
                  <li>
                    <Link
                      to="/careers"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaBriefcase className="mr-2 text-primary" />
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tenders"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaFileSignature className="mr-2 text-primary" />
                      Tenders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaCamera className="mr-2 text-primary" />
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news-and-events"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaNewspaper className="mr-2 text-primary" />
                      News & Events
                    </Link>
                  </li>
                  {/* Service Charter Link */}
                  <li>
                    <Link
                      to="/service-charter"
                      className="flex items-center px-4 py-2 hover:bg-primary/10"
                    >
                      <FaFileContract className="mr-2 text-primary" />
                      Service Charter
                    </Link>
                  </li>
                </ul>
              </li>

              <img src={coatOfArms} alt="Kenya Coat of Arms" className="h-12" />
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Dark backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="fixed inset-0 z-50 overflow-y-auto bg-white md:hidden">
            <div className="px-4">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-700 hover:text-primary"
              >
                <MdClose className="w-6 h-6 text-red-700" />
              </button>

              <div className="flex flex-col items-center mb-8 mt-8">
                <img src={logo} alt="KDSS School Logo" className="h-20 mb-2" />
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
                    to="/contact-us"
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
                    <MdExpandMore className="ml-1" />
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
                          <FaUserFriends className="mr-2 text-primary" />
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
                          <FaGraduationCap className="mr-2 text-primary" />
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
                          <FaChalkboardTeacher className="mr-2 text-primary" />
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
                    <MdExpandMore className="ml-1" />
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
                          className="flex items-center py-2 hover:text-primary"
                        >
                          <FaBriefcase className="mr-2 text-primary" />
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
                          className="flex items-center py-2 hover:text-primary"
                        >
                          <FaFileSignature className="mr-2 text-primary" />
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
                          className="flex items-center py-2 hover:text-primary"
                        >
                          <FaCamera className="mr-2 text-primary" />
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
                          className="flex items-center py-2 hover:text-primary"
                        >
                          <FaNewspaper className="mr-2 text-primary" />
                          News & Events
                        </Link>
                      </li>
                      {/* Service Charter Link in Mobile */}
                      <li>
                        <Link
                          to="/service-charter"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setMobileMoreOpen(false);
                          }}
                          className="flex items-center py-2 hover:text-primary"
                        >
                          <FaFileContract className="mr-2 text-primary" />
                          Service Charter
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
                    <FaPhoneAlt className="mr-2" /> +254 721 415 851
                  </a>
                  <a
                    href="mailto:info@kimangusecondary.sc.ke"
                    className="flex items-center text-sm text-gray-600 hover:text-primary"
                  >
                    <FaEnvelope className="mr-2" />
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
                    <FaFacebook />
                  </a>
                  <span className="text-gray-400 opacity-50 cursor-not-allowed">
                    <FaTiktok />
                  </span>
                  <span className="text-gray-400 opacity-50 cursor-not-allowed">
                    <FaYoutube />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;