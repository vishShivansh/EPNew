import AuditImage from "../../public/01-Audit.png";
import TaxationImage from "../../public/02-finance.png";
import AccountingImage from "../../public/03-finance-service.png";
import AdvisoryImage from "../../public/04-Taxation.png";
import PayrollImage from "../../public/05-Book Keeping.png";

const OurServices = () => {
  return (
    <div className="container mx-auto mt-12 mb-12">
      <div className="text-center flex items-center justify-center flex-col">
        <h2 className="font-bold mb-4 text-4xl">Our Services</h2>
        <p className="text-gray-600 line-clamp-2 w-[600px] text-center 2sm:w-[350px] 2sm:line-clamp-3 ">
          We offer a wide range of services designed to address the diverse
          financial needs of our clients, including:
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8 2sm:grid-cols-1">
        {/* First Row */}
        <div className="flex items-center justify-center">
          <div className="mr-8 border border-black rounded-full w-16 h-16 flex justify-center items-center">
            <img src={AuditImage} alt="Auditing" className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Auditing and Assurance
            </h4>
            <p className="text-gray-600 line-clamp-3 w-[250px]">
              Providing thorough and objective audits to ensure accuracy and
              compliance.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-8 border border-black rounded-full w-16 h-16 flex justify-center items-center">
            <img src={TaxationImage} alt="Taxation" className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Taxation</h4>
            <p className="text-gray-600 line-clamp-3 w-[250px]">
              Expert tax planning and compliance services to minimize
              liabilities and maximize returns.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-8 border border-black rounded-full w-16 h-16 flex justify-center items-center">
            <img src={AccountingImage} alt="Accounting" className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Accounting</h4>
            <p className="text-gray-600 line-clamp-3 w-[250px]">
              Comprehensive accounting services, including bookkeeping,
              financial statement preparation, and more.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-center mt-8">
          <div className="mr-8 border border-black rounded-full w-16 h-16 flex justify-center items-center">
            <img src={AdvisoryImage} alt="Advisory" className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Advisory</h4>
            <p className="text-gray-600 line-clamp-3 w-[250px]">
              Strategic business advisory services to support growth,
              efficiency, and profitability.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="mr-8 border border-black rounded-full w-16 h-16 flex justify-center items-center">
            <img src={PayrollImage} alt="Payroll" className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Payroll</h4>
            <p className="text-gray-600 line-clamp-3 w-[250px]">
              Efficient payroll processing and compliance services to ensure
              timely payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
