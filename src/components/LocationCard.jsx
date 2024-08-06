import { Link } from "react-router-dom";

export const LocationCard = () => {
  return (
    <div
      className="flex-1 mx-2 bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ height: "400px" }} // Adjust height as needed
    >
      <div className="bg-[#006b63] p-4">
        <h3 className="text-2xl font-bold text-white text-center">
          Office Location
        </h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.484367662201!2d77.70381846956298!3d28.989223871546216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64fe102f6fc5%3A0xe4f5397409c3c3a1!2s112%2F2%2C%20Thapar%20Nagar%2C%20Lajpat%20Bazaar%2C%20Thapar%20Nagar%2C%20Meerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1720292670713!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md 2sm:h-[280px] w-[450px] h-[280px] m-5 hover:border hover:border-blue-700 2sm:w-[330px]"
      ></iframe>
      <div className="relative flex bottom-8 bg-gray-50 text-blue-500 items-center hover:bg-gray-100 2sm:top-[2px]">
        <Link to="ContactUs.aspx" className="p-4">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
