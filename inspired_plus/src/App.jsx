import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "../src/Pages/Home";


function App() {
  return (
    <Router>
      <Navbar />

      {/* All <Route> components MUST be inside <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;