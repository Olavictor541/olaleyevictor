import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact.tsx";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home.tsx";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
