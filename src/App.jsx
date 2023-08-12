import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portifolio from "./pages/portifolio/Portifolio";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route  exact path="/" index element={<Home />} />
          <Route path="/Site-portifolio/about" element={<About />} />
          <Route path="/Site-portifolio/portifolio" element={<Portifolio />} />
          <Route path="/Site-portifolio/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
