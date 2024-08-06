import { useState } from "react";
import { Link } from "react-router-dom";

export const DueDateReminderCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex-1 mx-2 bg-white shadow-lg rounded-lg overflow-hidden "
      style={{ height: "400px" }} // Adjust height as needed
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#006b63] p-4 relative z-10 ">
        <h2 className="text-2xl font-bold text-white text-center">
          Due Date Reminder
        </h2>
      </div>
      <div className="p-4 bg-white relative z-10">
        <table className="w-full mb-4 border-collapse">
          <tbody>
            <tr>
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                (month, index) => (
                  <td key={index} className="border p-2 text-center">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      {month}
                    </a>
                  </td>
                )
              )}
            </tr>
            <tr>
              {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                (month, index) => (
                  <td key={index} className="border p-2 text-center">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      {month}
                    </a>
                  </td>
                )
              )}
            </tr>
            <tr>
              <td className="border p-2 text-center">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  All
                </a>
              </td>
              {[...Array(5)].map((_, index) => (
                <td key={index} className="border p-2"></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" flex flex-col-reverse h-32">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`p-4 bg-gray-100 hover:bg-gray-200 rounded-lg mb-2 ${
              isHovered ? "animate-stop" : "animate-float"
            }`}
          >
            <span className="font-semibold block">07 Jul 24</span>
            <span className="block">
              Payment of TDS/TCS of June. In case of government offices where
              TDS/TCS is paid by book entry, same shall be paid on the same day
              on which tax is deducted or collected.
            </span>
          </div>
        ))}
      </div>
      <div className="relative h-12 bottom-2 bg-gray-50 text-blue-500 flex items-center hover:bg-gray-100 2sm:top-[1px]">
        <Link to="DuedateAll.aspx" className="p-4 ">
          Read more...
        </Link>
      </div>
    </div>
  );
};
