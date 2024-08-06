import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { ClockIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import useContactForm from "../customHook/useContactForm.js";

export default function ContactUs() {
  const { formData, handleChange, handleSubmit } = useContactForm();
  const { name, number, email, message } = formData;

  return (
    <>
      <div className="bg-[#fbf9eb] py-4 mx-auto mt-[104px]">
        <div className="mx-auto">
          <div className="flex w-full">
            <h2 className="text-3xl font-bold text-[#30a099] pl-[204px]">
              Contact Us
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto pl-[204px] pr-[160px] py-8 ">
        <p className="mb-4">
          We are here to assist you with all your financial and accounting
          needs. Please feel free to reach out to us through any of the
          following methods:
        </p>
        <div className="flex flex-row gap-10">
          {/* Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-[250px]">
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold mb-2 text-blue-900/90 ">
                  Delhi Meerut
                </h4>
                <p className="flex items-center mb-2 gap-4">
                  <MapPinIcon className="h-5 w-5 text-black" />
                  <span>
                    111/2, Thapar Nagar Meerut, Uttar Pradesh, 250001 India
                  </span>
                </p>
                <p className="flex items-center mb-2 gap-4">
                  <PhoneIcon className="h-5 w-5 text-black" />
                  <a href="tel:8979000077" className="text-blue-600">
                    +91 8979000077
                  </a>
                </p>
                <p className="flex items-center mb-2 gap-4">
                  <EnvelopeIcon className="h-5 w-5 text-black" />
                  <a href="mailto:yash@equiltax.com" className="text-blue-600">
                    yash@equiltax.com
                  </a>
                </p>
                <p className="flex items-start gap-4 ">
                  <ClockIcon className="h-5 w-5 text-black mt-[0.3rem]" />
                  <span>
                    Monday to Saturday: 9:00 AM - 6:30 PM
                    <br />
                    Sunday: Closed
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className=" bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-[450px]">
            <h4 className="text-xl font-semibold mb-2">Contact Form</h4>
            <form
              onSubmit={(event) =>
                handleSubmit(event, "Yash Gupta", "yash@equiltax.com")
              }
            >
              <input
                name="name"
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                value={name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <input
                name="email"
                type="email"
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                required
              />
              <input
                name="number"
                type="tel"
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                placeholder="Phone Number"
                value={number}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows={4}
                className="w-full mb-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Type your message here"
                value={message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="flex py-3 px-8 bg-blue-900/90 font-semibold text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.9425802842306!2d77.7018084761735!3d28.989072467799236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c653cf54dac75%3A0x5e0450f761ef9eb0!2sAtul%20Jagdish%20%26%20Co!5e0!3m2!1sen!2sin!4v1718702796313!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
