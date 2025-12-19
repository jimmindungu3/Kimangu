import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import ExtraCurricular from "./pages/ExtraCurricular";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Tenders from "./pages/Tenders";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="extra-curricular" element={<ExtraCurricular />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="tenders" element={<Tenders />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
