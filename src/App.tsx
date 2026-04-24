import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact.tsx";
import { Crafts } from "./pages/Crafts.tsx";
import { About } from "./pages/About.tsx";
 
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home.tsx";
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/olaleyevictor/">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
