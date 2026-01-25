import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import ContactUs from "./pages/ContactUs";
import ServiceCharter from "./pages/ServiceCharter";
import Careers from "./pages/Careers";
import Tenders from "./pages/Tenders";
import Departments from "./pages/Departments";
import Gallery from "./pages/Gallery";
import NewsEvents from "./pages/NewsEvents";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="departments" element={<Departments />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="tenders" element={<Tenders />} />
          <Route path="service-charter" element={<ServiceCharter />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news-and-events" element={<NewsEvents />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
