import Counter from "./Counter";

const StatsSection = () => {
  return (
    <section className="flex sm-1:flex-col sm-1:py-10 sm-1:space-y-8 items-center lg:p-24 md:px-0 sm:py-20 sm:px-2 bg-black justify-evenly sm:space-x-10">
      {/* Years in Business */}
      <div className="mb-4 text-center text-white">
        <div>
          <Counter start={1} end={15} duration={2000} suffix="+" />
          <div className="text-lg font-semibold mb-2">Years in Business</div>
        </div>
      </div>

      {/* Clients Served */}
      <div className="mb-4 text-center text-white">
        <div>
          <Counter start={1} end={2000} duration={2000} suffix="+" />
          <div className="text-lg font-semibold mb-2">Clients Served</div>
        </div>
      </div>

      {/* Companies Registered */}
      <div className=" mb-4 text-center text-white">
        <div>
          <Counter start={1} end={5000} duration={2000} suffix="+" />
          <div className="text-lg font-semibold mb-2">Companies Registered</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
