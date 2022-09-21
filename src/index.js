import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Gallery from "./Pages/Gallery/gallery";
import HomePage from "./Pages/HomePage/homePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}></Route>
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);
