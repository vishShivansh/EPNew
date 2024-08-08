/* eslint-disable no-unused-vars */
import EnquiryImage from "../../public/enquery.jpg";
import useContactForm from "../customHook/useContactForm";

const GetInTouch = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  const { name, number, email, message } = formData;

  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="flex flex-row sm-1:flex-col items-center justify-center bg-white p-8 shadow-md gap-10">
          {/* Form Section */}
          <div className="lg:w-1/3 sm:w-1/2 sm-1:w-full sm-1:flex sm-1:flex-col sm-1:items-center">
            <div className="text-center mb-8">
              <span className="text-lg">Send a Message</span>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            <form
              onSubmit={(event) =>
                handleSubmit(event, "Yash Gupta", "yash@equiltax.com")
              }
              className="sm-1:w-[80%]"
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
          <div className="sm:w-1/2 mb-8">
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
