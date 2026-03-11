import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";

// Import Services and Vacancies pages
import Services from "./components/Our-Services/Services";
import Vacancies from "./components/Vacancies/Vacancies"; // <--- import Vacancies

function App() {
  return (
    <Router>
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vacancies" element={<Vacancies />} /> {/* <--- add this route */}
      </Routes>

      {/* Footer stays on all pages */}
      <Footer />
    </Router>
  );
}

export default App;