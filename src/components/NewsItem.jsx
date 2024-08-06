import { useState } from "react";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "News Item 1",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  {
    id: 2,
    title: "News Item 2",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  {
    id: 3,
    title: "News Item 3",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  {
    id: 4,
    title: "News Item 4",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  {
    id: 5,
    title: "News Item 5",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  {
    id: 6,
    title: "News Item 6",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  {
    id: 7,
    title: "News Item 7",
    link: "https://www.news18.com/india/when-uks-next-pm-keir-starmer-changed-labour-partys-stance-on-kashmir-promised-reset-of-india-ties-8955284.html",
  },
  // Add more news items as needed
];

const NewsCard = () => {
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
      <div className="bg-[#006b63] p-4">
        <h2 className="font-bold text-white text-center text-2xl">
          Latest News
        </h2>
      </div>
      <div className="relative h-96 overflow-hidden">
        <div
          className={`absolute inset-0 flex flex-col space-y-1 ${
            isHovered ? "animate-stop" : "animate-float"
          }`}
        >
          {newsItems.map((news) => (
            <a
              key={news.id}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              {news.title}
            </a>
          ))}
        </div>
      </div>
      <div className="relative h-12 bottom-24 bg-gray-50 text-blue-500 flex items-center hover:bg-gray-100 2sm:top-[1px]">
        <Link to={"#"} className="p-4">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
