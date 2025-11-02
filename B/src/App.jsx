import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Company from "./views/Company";
import Services from "./views/Services";
import Contact from "./views/Contact";
import About from "./views/About";
import SocialBar from "./components/SocialBar";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Export from "./views/Export";
import CatalogueGrid from "./views/CatalogueGrid";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/catalogue" element={<CatalogueGrid />} />
          <Route path="/export" element={<Export />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <SocialBar />
    </>
  );
};

export default App;
