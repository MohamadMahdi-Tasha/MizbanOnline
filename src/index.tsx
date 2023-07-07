// Importing chunks
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.tsx";
import HeaderComponent from './components/headerComponent.tsx';
import NavComponent from './components/navComponent.tsx';
import FooterComponent from './components/footerComponent.tsx';
import './assets/fonts/Yekan-Bakh/font.css';
import './index.css';

// Variables
const rootElement = document.getElementById('react-root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Rendering all pages in strict mode of React
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <HeaderComponent />
        <NavComponent />
        <Routes>
            <Route path={'/'} element={<HomePage  />} />
        </Routes>
        <FooterComponent />
    </BrowserRouter>
  </React.StrictMode>
)
