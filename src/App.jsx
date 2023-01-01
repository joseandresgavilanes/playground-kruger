import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={""} />
        <Route path="/bmi" element={"hola"} />
        <Route path="/age" element={""} />
        <Route path="/clock" element={""} />
        <Route path="/about" element={""} />
        <Route path="/contact" />
      </Routes>
    </>
  );
}

export default App;
