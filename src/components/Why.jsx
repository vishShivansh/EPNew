import { Link } from "react-router-dom"; // Ensure react-router-dom is correctly imported
import AboutUs from "../../public/about-us.jpg";

export const Why = () => {
  return (
    <div className="flex items-stretch justify-center">
      <div className="w-1/2 2sm:w-0">
        <img
          src={AboutUs}
          alt="AboutUs"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center 2sm:w-full">
        <div className="text-center">
          <h3 className="text-2xl text-[#006b63] font-bold mb-4 2sm:text-start 2sm:mb-1">
            <span>Why You</span>
          </h3>
          <h2 className="text-3xl font-bold mb-4 2sm:text-start ">EQUILTAX</h2>
          <p className="text-gray-700 2sm:text-start ">
            At <strong>EquilTax</strong>, we are dedicated to providing
            comprehensive financial and accounting services tailored to meet the
            unique needs of each of our clients. With a legacy of excellence and
            a commitment to integrity, we have established ourselves as a
            trusted partner in the financial industry.
          </p>
          <Link
            to={"AboutUs.aspx"}
            className="block mt-4 text-blue-500 hover:underline 2sm:text-start "
          >
            Readmore...
          </Link>
        </div>
      </div>
    </div>
  );
};
