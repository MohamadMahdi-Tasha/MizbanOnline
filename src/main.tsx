// Importing part
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './assets/fonts/Yekan-Bakh/font.css';
import './index.css';
import HomePage from "./pages/homePage.tsx";

// Variables
const rootElement = document.getElementById('react-root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Rendering all pages in strict mode of React
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage  />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
