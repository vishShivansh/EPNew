import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";

import { Footer } from "./components/Footer.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { Home } from "./pages/Home.jsx";
import NewsFeed from "./pages/NewsFeed.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About.jsx" element={<About />} />
        <Route path="/NewsFeed.jsx" element={<NewsFeed />} />
        <Route path="/Career.jsx" element={<Career />} />
        <Route path="/ContactUs.jsx" element={<ContactUs />} />
      </Routes>
      <div className="bg-green-500 rounded-full fixed sm-1:bottom-[18px] sm-1:right-4 sm:bottom-[20px] sm:right-10 z-50 transition-transform duration-300 ease-in-out shadow-md">
        <WhatsAppButton />
      </div>
      <Footer />
    </BrowserRouter>
  );
}
