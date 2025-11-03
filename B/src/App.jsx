import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Company from "./views/Company";
import Services from "./views/Services";
import Contact from "./views/Contact";
import About from "./views/About";
import Usabout from "./views/Usabout";
import Technology from "./views/Technology";
import SocialBar from "./components/SocialBar";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/usabout" element={<Usabout />} />
          <Route path="/tec" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <SocialBar />
    </>
  );
};

export default App;
