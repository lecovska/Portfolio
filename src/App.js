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
        <Route exact path="/Pages/HomePage" element={<HomePage />}/>
        <Route path="/Pages/About" element={<About />} />
        <Route path="/Pages/Contact" element={<Contact />} />
        <Route path="Pages/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
