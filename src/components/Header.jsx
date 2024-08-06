/* eslint-disable react-hooks/exhaustive-deps */
import {
  Bars3Icon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null); // null means no item is hovered
  const [isMenuOpen, setIsMenuOpen] = useState(false); // null means no item is hovered
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (item) => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredItem(item);
    }, 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setHoveredItem(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out shadow-md">
      <div className="w-[100%] mx-auto md:mx-0">
        <div className="flex md:gap-10 items-center justify-between md:justify-normal">
          <div className="p-3">
            <Link to={"/"}>
              <div className="flex flex-col sm-1:ml-2">
                <span className="font-bold text-black text-5xl">EquilTax</span>
                <div className="text-center font-bold text-lg">
                  <span className="text-red-600">--</span>
                  <span className="text-[rgba(32,95,141,255)]">
                    PROFESSIONALS{" "}
                  </span>
                  <span className="text-red-600">--</span>
                </div>
              </div>
            </Link>
          </div>
          <div onClick={toggleMenu} className="md:hidden">
            <Bars3Icon className="w-10 h-10 sm-1:mr-24 sm:mr-24" />
          </div>
          {isMenuOpen && (
            <div
              className={`flex px-4 absolute flex-col items-center justify-center top-full right-0 bg-white/90 space-y-4 py-4`}
            >
              <div
                className={`flex flex-col items-center justify-center space-y-4`}
              >
                <Link to={"/"} className="text-gray-900 hover:text-red-500">
                  Home
                </Link>
                <Link
                  to={"/About.jsx"}
                  className="text-gray-900 text-xl hover:text-red-500"
                >
                  About Us
                </Link>
                <Link
                  to={"/Newsfeed.jsx"}
                  className="text-gray-900 text-xl hover:text-red-500"
                >
                  NewsFeed
                </Link>
                <Link
                  to={"/Career.jsx"}
                  className="text-gray-900 text-xl hover:text-red-500"
                >
                  Career
                </Link>
                <Link
                  to={"/ContactUs.jsx"}
                  className="text-gray-900 text-xl hover:text-red-500"
                >
                  Contact Us
                </Link>
                <div
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  className="relative z-20"
                >
                  <button
                    className={`flex items-center text-gray-900 text-xl hover:text-red-500`}
                  >
                    Services
                    <ChevronDownIcon className={"w-5 h-5 ml-1"} />
                  </button>
                  {hoveredItem === 1 && (
                    <div className="absolute top-0 bg-white border shadow-lg w-[200px] left-1/2 transform -translate-x-[294px]">
                      <Link to={"#"} className="header_DropdownItem">
                        Audit and Assurance
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Taxation
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Accounting
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Advisory
                      </Link>
                      <Link
                        to={"#"}
                        className="header_DropdownItem"
                        style={{ borderBottom: "none" }}
                      >
                        Payroll
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  className="relative z-20"
                >
                  <button className="flex items-center text-gray-900 text-xl hover:text-red-500">
                    GST
                    <ChevronDownIcon className={"w-5 h-5 ml-1"} />
                  </button>
                  {hoveredItem === 2 && (
                    <div className="absolute top-0 bg-white border shadow-lg w-[200px] left-1/2 transform -translate-x-[294px]">
                      <Link
                        to={"https://services.gst.gov.in/services/login"}
                        target="_blank"
                        className="header_DropdownItem"
                      >
                        GST Portal
                      </Link>
                      <Link
                        to={"https://ewaybill.nic.in/"}
                        target="_blank"
                        className="header_DropdownItem"
                      >
                        E way bill portal
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Acts
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Rules
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Circulars
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Notifications
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Forms
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Orders
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        Instructions
                      </Link>
                      <Link to={"#"} className="header_DropdownItem">
                        HSN Code With Rate
                      </Link>
                      <Link
                        to={"#"}
                        className="header_DropdownItem"
                        style={{ borderBottom: "none" }}
                      >
                        SAC Code
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center bg-green-500/90 h-10 w-[200px] rounded-md">
                <a href="tel:8979000077" className="font-bold text-white">
                  +91 8979000077
                </a>
              </div>
            </div>
          )}
          <div
            className={`hidden w-full md:flex items-center md:justify-between`}
          >
            <div
              className={`flex items-center lg:text-xl md:text-lg md:space-x-4 lg:space-x-8`}
            >
              <Link to={"/"} className="text-gray-900 hover:text-red-500">
                Home
              </Link>
              <Link
                to={"/About.jsx"}
                className="text-gray-900 hover:text-red-500"
              >
                <span className="lg:hidden">AboutUs</span>
                <span className="md:hidden lg:block whitespace-nowrap">
                  About Us
                </span>
              </Link>
              <Link
                to={"/Newsfeed.jsx"}
                className="text-gray-900 hover:text-red-500"
              >
                NewsFeed
              </Link>
              <Link
                to={"/Career.jsx"}
                className="text-gray-900 hover:text-red-500"
              >
                Career
              </Link>
              <Link
                to={"/ContactUs.jsx"}
                className="text-gray-900 hover:text-red-500"
              >
                <span className="lg:hidden">ContactUs</span>
                <span className="md:hidden lg:block whitespace-nowrap">
                  Contact Us
                </span>
              </Link>
              <div
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                className="relative z-20 py-4"
              >
                <button
                  className={`flex items-center text-gray-900 hover:text-red-500`}
                >
                  Services
                  <ChevronDownIcon className={"w-5 h-5 ml-1"} />
                </button>
                {hoveredItem === 1 && (
                  <div className="absolute mt-2 bg-white border shadow-lg w-[250%] left-1/2 transform -translate-x-1/2">
                    <Link to={"#"} className="header_DropdownItem">
                      Audit and Assurance
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Taxation
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Accounting
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Advisory
                    </Link>
                    <Link
                      to={"#"}
                      className="header_DropdownItem"
                      style={{ borderBottom: "none" }}
                    >
                      Payroll
                    </Link>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                className="relative z-20 py-4"
              >
                <button className="flex items-center text-gray-900 hover:text-red-500">
                  GST
                  <ChevronDownIcon className={"w-5 h-5 ml-1"} />
                </button>
                {hoveredItem === 2 && (
                  <div className="absolute bg-white border shadow-lg w-[400%] left-1/2 transform -translate-x-1/2">
                    <Link
                      to={"https://services.gst.gov.in/services/login"}
                      target="_blank"
                      className="header_DropdownItem"
                    >
                      GST Portal
                    </Link>
                    <Link
                      to={"https://ewaybill.nic.in/"}
                      target="_blank"
                      className="header_DropdownItem"
                    >
                      E way bill portal
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Acts
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Rules
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Circulars
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Notifications
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Forms
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Orders
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      Instructions
                    </Link>
                    <Link to={"#"} className="header_DropdownItem">
                      HSN Code With Rate
                    </Link>
                    <Link
                      to={"#"}
                      className="header_DropdownItem"
                      style={{ borderBottom: "none" }}
                    >
                      SAC Code
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="sm:hidden Lg-2:hidden md:block Lg-1:block text-white bg-green-500/90 rounded-lg mr-4">
              <a href="tel:8979000077">
                <PhoneIcon className="w-8 h-8" />
              </a>
            </div>
            <div className="items-center justify-center bg-green-500/90 h-10 w-[200px] rounded-md hidden Lg-2:flex mr-10">
              <a href="tel:8979000077" className="font-bold text-white">
                +91 8979000077
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
