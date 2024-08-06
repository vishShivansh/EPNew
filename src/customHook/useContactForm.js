// useContactForm.js
import emailjs from "emailjs-com";
import { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const { name, number, email, message } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, recipientName, recipientEmail) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_dwnfkjh",
        "template_th7pdj6",
        {
          from_name: name,
          from_email: email,
          to_name: recipientName,
          message: message,
          number: number,
        },
        "99E71u4FqPhpF8pCH",
        recipientEmail
      )
      .then((response) => {
        console.log("Success:", response);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
