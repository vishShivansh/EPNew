/* eslint-disable no-unused-vars */
import EnquiryImage from "../../public/enquery.jpg";
import useContactForm from "../customHook/useContactForm";

const GetInTouch = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  const { name, number, email, message } = formData;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center bg-white p-8 shadow-md gap-10 2sm:flex-col">
          {/* Form Section */}
          <div className="w-1/3 2sm:w-full">
            <div className="text-center mb-8">
              <span className="text-lg">Send a Message</span>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            <form
              onSubmit={(event) =>
                handleSubmit(event, "Yash Gupta", "yash@equiltax.com")
              }
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Number"
                  maxLength="10"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Delete"
                    ) {
                      e.preventDefault();
                    }
                  }}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Email ID"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Type Your Message.."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Image Section */}
          <div className="w-1/2 mb-8 2sm:w-full">
            <img
              src={EnquiryImage}
              alt="EnquiryImage"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
