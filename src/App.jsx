import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Clock from "./components/Clock/Clock";
import AgeCalculator from "./components/AgeCalculator/AgeCalculator";
import Bmi from "./components/BMI/Bmi";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/age" element={<AgeCalculator />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
