import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={"hola"} />
        <Route path="/age" element={""} />
        <Route path="/clock" element={""} />
        <Route path="/about" element={""} />
        <Route path="/contact" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
