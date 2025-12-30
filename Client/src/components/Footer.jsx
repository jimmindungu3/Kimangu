import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12 pb-4 text-white bg-gray-700">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <h4 className="mb-4 text-xl font-bold">
              Kimangu Day Secondary School
            </h4>
            <p className="mb-2">Excellence in education since 2016</p>
            <p>Rongai, Nakuru County, Kenya</p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/groups/616158830286938/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-blue-400">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-blue-400">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/calendar" className="hover:text-blue-400">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-blue-400">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-blue-400">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/tenders" className="hover:text-blue-400">
                  Tenders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <i className="mr-2 text-blue-400 fas fa-phone-alt"></i>
                <a href="tel:+254721415851" className="hover:text-blue-400">
                  +254 721 415 851
                </a>
              </li>
              <li>
                <i className="mr-2 text-blue-400 fas fa-envelope"></i>
                <a
                  href="mailto:info@kimangu.sc.ke"
                  className="hover:text-blue-400"
                >
                  info@kimangu.sc.ke
                </a>
              </li>
              <li>
                <i className="mr-2 text-blue-400 fas fa-envelope"></i>
                <a
                  href="mailto:admissions@kimangu.sc.ke"
                  className="hover:text-blue-400"
                >
                  admissions@kimangu.sc.ke
                </a>
              </li>
              <li>
                <i className="mr-2 text-blue-400 fa-solid fa-signs-post"></i>
                P.O. Box 79, Rongai, Nakuru
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-8 border-t border-gray-600">
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
            <img
              src="/src/assets/images/coat-of-arms.png"
              alt="GOK - Ministry of Education"
              className="object-contain w-auto h-8 bg-white"
            />
            <img
              src="/src/assets/images/tsc.jpeg"
              alt="Teachers Service Commission"
              className="object-contain w-auto h-8"
            />
            <img
              src="/src/assets/images/knec.jpeg"
              alt="Kenya National Examinations Council"
              className="object-contain w-auto h-8"
            />
            <img
              src="/src/assets/images/kuccps.png"
              alt="Kenya Universities and Colleges Central Placement Service"
              className="object-contain w-auto h-8"
            />
            <img
              src="/src/assets/images/kicd.jpeg"
              alt="Kenya Institute of Curriculum Development"
              className="object-contain w-auto h-8"
            />
          </div>
        </div>

        <div className="pt-4 text-sm text-center border-t border-gray-600 md:flex md:items-center md:justify-between">
          <p className="md:mb-0">
            &copy; 2025 Kimangu Day Secondary School. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            <Link to="/privacy" className="text-blue-300 hover:text-blue-400">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="text-blue-300 hover:text-blue-400">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
