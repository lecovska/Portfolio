import React from 'react';
import './App.css';
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Gallery from "./Pages/Gallery/gallery";
import HomePage from "./Pages/HomePage/homePage";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
