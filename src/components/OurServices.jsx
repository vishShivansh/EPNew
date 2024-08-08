import { OurServicesProp } from "../props/OurServicesProp";

const OurServices = () => {
  return (
    <section className="mx-auto md:my-20 my-12 sm-1:px-4">
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-bold mb-4 text-4xl sm-1:text-3xl">Our Services</h2>
        <p className="text-gray-600 sm-1:text-sm line-clamp-2 sm-1:line-clamp-4 text-center sm:w-[600px] md:w-full">
          We offer a wide range of services designed to address the diverse{" "}
          <br className="sm-1:hidden sm:hidden" />
          financial needs of our clients, including:
        </p>
      </div>

      <OurServicesProp />
    </section>
  );
};

export default OurServices;
