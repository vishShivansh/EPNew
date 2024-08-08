import BBCNews from "../components/BBCNews";
import CAClubNews from "../components/CAClubNews";
import ETNews from "../components/ETNews";
import ETTopStories from "../components/ETTopStories";
import YahooNews from "../components/YahooNews";

/* eslint-disable react/no-unescaped-entities */
const NewsFeed = () => {
  return (
    <>
      <div className="bg-[#fbf9eb] py-4 mx-auto">
        <div className="">
          <div className="flex w-full items-center">
            <h2 className="text-3xl font-bold text-[#30a099] container mx-auto px-4">
              News Feed
            </h2>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center container mx-auto bg-white">
        <div className="w-full space-y-8 p-6">
          {/* Economic Times Top Stories */}
          <div className="bg-white p-6 shadow-md border border-gray-500 flex flex-col relative">
            <span className="text-xl font-bold text-gray-800 bg-gray-200 w-full py-3 absolute top-0 left-0 flex items-center pl-2 border border-gray-400">
              Economic Times Top Stories
            </span>
            <ETTopStories />
          </div>

          {/* Economic Times */}
          <div className="bg-white p-6 shadow-md border border-gray-500 flex flex-col relative">
            <span className="text-xl font-bold text-gray-800 bg-gray-200 w-full py-3 absolute top-0 left-0 flex items-center pl-2 border border-gray-400">
              Economic Times
            </span>
            <ETNews />
          </div>

          {/* CA Club India */}
          <div className="bg-white p-6 shadow-md border border-gray-500 flex flex-col relative">
            <span className="text-xl font-bold text-gray-800 bg-gray-200 w-full py-3 absolute top-0 left-0 flex items-center pl-2 border border-gray-400">
              CA Club India
            </span>
            <CAClubNews />
          </div>

          {/* BBC News */}
          <div className="bg-white p-6 shadow-md border border-gray-500 flex flex-col relative">
            <span className="text-xl font-bold text-gray-800 bg-gray-200 w-full py-3 absolute top-0 left-0 flex items-center pl-2 border border-gray-400">
              BBC News
            </span>
            <BBCNews />
          </div>

          {/* Yahoo News */}
          <div className="bg-white p-6 shadow-md border border-gray-500 flex flex-col relative">
            <span className="text-xl font-bold text-gray-800 bg-gray-200 w-full py-3 absolute top-0 left-0 flex items-center pl-2 border border-gray-400">
              Yahoo News
            </span>
            <YahooNews />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
