/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import EquiltaxLogo from "../../public/Expert CA2.png";
import WhatsappChatBg from "../../public/WhatsappChatBg.jpg";

export const WhatsAppButton = () => {
  const [isWidgetopen, setIsWidgetopen] = useState(false);
  function handleWhatsappWidget() {
    setIsWidgetopen(!isWidgetopen);
  }
  const phoneNumber = "918979000077"; // Replace with your WhatsApp number
  const message = "Hello, I have a query about your services."; // Customize your message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {isWidgetopen ? (
        <div
          onClick={handleWhatsappWidget}
          className="text-white w-12 h-12 flex items-center justify-center hover:shadow-lg hover:rounded-full rounded-full cursor-pointer"
        >
          <FaWhatsapp className="w-8 h-8" />
        </div>
      ) : (
        <div
          onClick={handleWhatsappWidget}
          className="text-white w-[180px] h-12 flex items-center justify-center gap-2 hover:shadow-lg  hover:rounded-3xl cursor-pointer"
        >
          <FaWhatsapp className="w-8 h-8" />
          <span>Whatsapp chat</span>
        </div>
      )}
      {isWidgetopen && (
        <div className="fixed bottom-[84px] right-12 z-60 transition-transform duration-300 ease-in-out shadow-lg w-[300px] h-[300px]">
          <div className="w-full bg-green-700 h-[80px] flex items-center justify-between pl-4 rounded-t-lg">
            <div className="flex gap-2">
              <img
                src={EquiltaxLogo}
                alt="EquilTaxLogo"
                className="w-10 h-10 rounded-full"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Yash @</span>
                <span className="text-xs">EquilTax Professionals</span>
              </div>
            </div>
            <FaXmark
              onClick={handleWhatsappWidget}
              className="mr-4 mb-4 text-gray-200 hover:text-white cursor-pointer"
            />
          </div>
          <div
            className="h-[140px] bg-cover pt-4 pl-4"
            style={{ backgroundImage: `url(${WhatsappChatBg})` }}
            loading="lazy"
          >
            <div className="bg-white w-[85%] h-[70%] p-2 flex flex-col rounded-lg">
              <span className="text-md font-semibold text-black/60">
                Yash @
              </span>
              <span className="text-sm font-medium text-black">Hi</span>
              <span className="text-sm font-medium text-black">
                Send us direct whatsapp message.
              </span>
            </div>
          </div>
          <div className="bg-white w-full h-[80px] rounded-b-lg flex justify-center items-center">
            <a
              href={whatsappUrl}
              className="flex items-center justify-center w-[85%] bg-green-600 h-10 rounded-2xl"
            >
              Start chat
            </a>
          </div>
        </div>
      )}
    </>
  );
};
