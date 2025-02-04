import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import CurrencyConverter from './components/CurrencyConverter.tsx';
import './index.css';
import UFCalculator from './components/Ufcalculator.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/uf-calculator" element={<UFCalculator />} />
      </Routes>
    </Router>
  </StrictMode>
);