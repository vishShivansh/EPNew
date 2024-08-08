import AuditImage from "../../public/01-Audit.png";
import TaxationImage from "../../public/02-finance.png";
import AccountingImage from "../../public/03-finance-service.png";
import AdvisoryImage from "../../public/04-Taxation.png";
import PayrollImage from "../../public/05-Book Keeping.png";

const data = [
  {
    title: "Auditing and Assurance",
    description:
      "Providing thorough and objective audits to ensure accuracy and compliance.",
    img: AuditImage,
  },
  {
    title: "Taxation",
    description:
      "Expert tax planning and compliance services to minimize liabilities and maximize returns.",
    img: TaxationImage,
  },
  {
    title: "Accounting",
    description:
      "Comprehensive accounting services, including bookkeeping, financial statement preparation, and more.",
    img: AccountingImage,
  },
  {
    title: "Advisory",
    description:
      "Strategic business advisory services to support growth, efficiency, and profitability.",
    img: AdvisoryImage,
  },
  {
    title: "Payroll",
    description:
      "Efficient payroll processing and compliance services to ensure timely payments.",
    img: PayrollImage,
  },
];

export const OurServicesProp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-6 gap-6 sm-1:gap-4 sm-1:mt-4 sm:mt-4 sm:px-8 md:px-4">
      {data.map((service, index) => (
        <div key={index} className="flex items-center">
          {/* Image Column */}
          <div className="flex-shrink-0 mr-8 sm-1:mr-4">
            <div className="border border-black rounded-full w-16 h-16 sm-1:w-12 sm-1:h-10 flex justify-center items-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-8 h-8 sm-1:w-5 sm-1:h-6"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold sm-1:text-lg mb-2 sm-1:mb-1">
              {service.title}
            </h4>
            <p className="text-gray-600 line-clamp-3 sm-1:text-sm sm-1:line-clamp-6">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
