/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null); // null means no item is hovered
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

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out shadow-md">
      <div className="container mx-auto ">
        <div className="flex items-center gap-10">
          <div className="p-3">
            <Link to={"/"}>
              <div className="flex flex-col">
                <span className="font-bold text-black text-5xl">EquilTax</span>
                <span className="text-center font-bold text-[rgba(32,95,141,255)] text-lg">
                  <span className="text-red-600">--</span>PROFESSIONALS{" "}
                  <span className="text-red-600">--</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="flex space-x-10 mt-5">
              <Link
                to={"/"}
                className="text-gray-900 text-xl hover:text-red-500"
              >
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
                className="relative z-20 pb-4"
              >
                <button
                  className={`flex items-center text-gray-900 text-xl hover:text-red-500`}
                >
                  Services
                  <ChevronDownIcon className={"w-5 h-5 ml-1"} />
                </button>
                {hoveredItem === 1 && (
                  <div className="absolute bg-white border shadow-lg mt-2 w-[200px] left-1/2 transform -translate-x-1/2">
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
                className="relative z-20 pb-4"
              >
                <button className="flex items-center text-gray-900 text-xl hover:text-red-500">
                  GST
                  <ChevronDownIcon className={"w-5 h-5 ml-1"} />
                </button>
                {hoveredItem === 2 && (
                  <div className="absolute bg-white border shadow-lg mt-2 w-[200px] left-1/2 transform -translate-x-1/2">
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

            <div className="flex items-center justify-center bg-green-500/90 h-10 rounded-md w-[150px] mr-10">
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
