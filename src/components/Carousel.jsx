import office from "../../public/office2.jpg";
import useContactForm from "../customHook/useContactForm";

const Carousel = () => {
  const { formData, handleSubmit, handleChange } = useContactForm();
  const { name, number, email } = formData;

  return (
    <section
      className="flex flex-col bg-cover bg-gray-900 text-white py-24 px-6 h-[650px]"
      style={{ backgroundImage: `url(${office})` }}
    >
      <div className="flex flex-col justify-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-violet-800">
          Welcome to EquilTax.com
        </h1>
        <p className="text-lg mb-2 line-clamp-3 max-w-lg text-green-700 font-medium">
          At EquilTax Professionals, we are dedicated to providing comprehensive
          financial and accounting services tailored to meet the unique needs of
          each of our clients.
        </p>
        <form
          onSubmit={(event) =>
            handleSubmit(event, "Yash Gupta", "yash@equiltax.com")
          }
          className="max-w-lg bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="flex w-full">
              <div className="w-full px-2 mb-4">
                <label className="block text-md font-bold mb-1 text-black">
                  Name
                </label>
                <input
                  size="1"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md text-black"
                />
              </div>
              <div className="w-full px-2 mb-4 ">
                <label className="block text-md font-bold mb-1 text-black">
                  Mobile
                </label>
                <input
                  size="1"
                  type="tel"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md text-black"
                  pattern="[0-9()#&amp;+*-=.]+"
                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full px-2 mb-1">
                <label className="block text-md font-bold mb-1 text-black">
                  Email
                </label>
                <input
                  size="1"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-500 rounded-md text-black"
                  required
                  aria-required="true"
                />
              </div>
              <div className="w-full px-2 mb-1">
                <span className="block text-sm font-semibold mb-7"></span>
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-rose-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Carousel;
