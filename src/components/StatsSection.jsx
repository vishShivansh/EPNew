import Counter from "./Counter";

const StatsSection = () => {
  return (
    <section className="flex items-center p-24 bg-black justify-evenly">
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
