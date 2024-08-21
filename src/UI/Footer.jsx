import React from "react";
import logo from "../assets/img/Health___Fitness.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-12 bg-[#eeeaff]"
      data-aos-duration="1100"
      data-aos="fade-up"
    >
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Health & Fitness Logo"
                className="w-10 h-10 mr-4"
              />
              <h2 className="text-lg font-semibold">Health & Fitness</h2>
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque fugit nam mollitia nulla soluta.
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Meal Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Become a member
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl text-gray-800 mb-4">Healthy Living</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Fitness
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Experts
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-xl text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">
          Copyright - {year} developed by Rohan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
