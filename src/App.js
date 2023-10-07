import "./App.css";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";

import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/navbar" element={<Navbar />} />

          <Route exact path="/home" element={<Home />} />

          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/education" element={<Education />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
