import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="mx-auto px-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-10 md:px-0 sm:px-12 sm:py-4 md:py-0 lg:gap-0 lg:px-10">
          {/* Useful Links */}
          <div className="">
            <h4 className="text-lg sm-1:text-base font-bold mb-4 sm-1:mb-2">
              Useful Links
            </h4>
            <ul className="space-y-2 sm-1:text-sm">
              <li>
                <Link to={"/"} className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/About.jsx"} className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/Career.jsx"} className="hover:text-gray-300">
                  Career
                </Link>
              </li>
              <li>
                <Link to={"/ContactUs.jsx"} className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="">
            <h4 className="text-lg font-bold mb-4 sm-1:mb-2 sm-1:text-base">
              Our Services
            </h4>
            <ul className="space-y-2 sm-1:text-sm">
              <li>
                <Link to={"#"} className="hover:text-gray-300">
                  Audit and Assurance
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-gray-300">
                  Taxation
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-gray-300">
                  Accounting
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-gray-300">
                  Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="">
            <h4 className="text-lg font-bold mb-4 sm-1:mb-2 sm-1:text-base">
              Important Links
            </h4>
            <ul className="space-y-2 sm-1:text-sm">
              <li>
                <a
                  href={"http://incometaxindia.gov.in/Pages/default.aspx"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Income Tax Dept.
                </a>
              </li>
              <li>
                <a
                  href={"http://cbec.gov.in/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Central Board of Excise &amp; Customs
                </a>
              </li>
              <li>
                <a
                  href={"http://mca.gov.in/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Ministry of Corporate Affairs
                </a>
              </li>
              <li>
                <a
                  href={"http://epfindia.com/site_en/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  Employees Provident Fund
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="">
            <h4 className="text-lg font-bold mb-4 sm-1:mb-2 sm-1:text-base">
              Contact Us
            </h4>
            <ul className="space-y-2 sm-1:text-sm">
              <li className="flex items-center space-x-2 ">
                <MapPinIcon className="h-10 w-10 text-gray-400" />
                <span>
                  111/2, Thapar Nagar, Meerut, Uttar Pradesh, 250001 India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <span>+91 8979000077</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <span>tax@equiltax.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} <strong>EQUILTAX</strong>. All
            Rights Reserved
          </p>
          <p>
            Design By{" "}
            <a
              href={
                "https://my-portfolio-shivansh-guptas-projects-acc2e36d.vercel.app/"
              }
              target="_blank"
              rel="nofollow"
              className="text-blue-400 hover:underline"
            >
              ShivTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
