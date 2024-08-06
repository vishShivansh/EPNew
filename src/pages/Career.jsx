import emailjs from "emailjs-com";
import { useState } from "react";

export default function Career() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    position: "",
    dob: "",
    qualification: "",
    portfolio: "",
    lastCompany: "",
    experience: "",
    comments: "",
  });

  const {
    firstName,
    lastName,
    email,
    mobile,
    position,
    dob,
    qualification,
    portfolio,
    lastCompany,
    experience,
    comments,
  } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_dmcicsg",
        "template_wjpl1ln",
        {
          to_name: "Yash Gupta", // Replace with the recipient's name
          firstName: firstName,
          lastName: lastName,
          email: email,
          number: mobile,
          position: position,
          dob: dob,
          qualification: qualification,
          portfolio: portfolio,
          lastCompany: lastCompany,
          experience: experience,
          comments: comments,
        },
        "99E71u4FqPhpF8pCH",
        "gst@equiltax.com"
      )
      .then((response) => {
        console.log("Success:", response);
        alert("Form submitted successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          position: "",
          dob: "",
          qualification: "",
          portfolio: "",
          lastCompany: "",
          experience: "",
          comments: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div className="bg-[#fbf9eb] py-4 mx-auto mt-[104px]">
        <div className="mx-auto">
          <div className="flex w-full">
            <h2 className="text-3xl font-bold text-[#30a099] pl-[180px]">
              Career
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="bg-white">
          <div className="mb-6 px-[165px] line-clamp-2">
            <p className="text-gray-700">
              We nurture and cultivate a sense of pride in the work and create
              team leaders. Your growth chart will be governed by well-defined
              transparent policies of the firm. Apply via the form given below
              and meet us for a face-to-face interview.
            </p>
          </div>
          <form
            className="grid md:grid-cols-2 gap-2 px-[200px]"
            onSubmit={handleSubmit}
          >
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={firstName}
                onChange={handleChange}
                type="text"
                id="firstName"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                id="lastName"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                id="email"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                name="mobile"
                type="number"
                value={mobile}
                onChange={handleChange}
                id="mobile"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full h-10 border border-gray-300 pl-2 rounded-md"
              >
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Position you are applying for
              </label>
              <input
                name="position"
                type="text"
                value={position}
                onChange={handleChange}
                id="position"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">
                Date Of Birth (DD/MM/YYYY){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                name="dob"
                value={dob}
                onChange={handleChange}
                type="text"
                id="dob"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">Highest Qualification</label>
              <input
                name="qualification"
                type="text"
                value={qualification}
                onChange={handleChange}
                id="qualification"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">Portfolio Website</label>
              <input
                name="portfolio"
                type="text"
                value={portfolio}
                onChange={handleChange}
                id="portfolio"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">
                Upload Resume *(Max size 1 MB)
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                className="w-full h-10 border border-gray-300 p-1 rounded-md"
              />
            </div>
            <div className="col-span-1 pr-5">
              <label className="block mb-1">Last Company You Worked For</label>
              <input
                name="lastCompany"
                type="text"
                value={lastCompany}
                onChange={handleChange}
                id="lastCompany"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-1 pl-5">
              <label className="block mb-1">Years Of Experience</label>
              <input
                name="experience"
                type="text"
                value={experience}
                onChange={handleChange}
                id="experience"
                className="w-full h-10 border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">
                Reference / Comments / Questions
              </label>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="4"
                value={comments}
                onChange={handleChange}
                className="w-full h-16 border border-gray-300 p-3 rounded-md"
              ></textarea>
            </div>
            <div className="col-span-2 text-center mb-6">
              <input
                type="submit"
                name="submit"
                value="Send Application"
                id="submit"
                className="px-10 py-4 bg-blue-500 text-white text-xl font-bold rounded-lg hover:bg-blue-600 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
