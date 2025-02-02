import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import './index.css'
import {  PagArquetipos, PagDesvantagens, PagFavoritos, PagPericias, PagVantagens } from './App.tsx';
import { Layout } from './Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/pericias" element={<PagPericias />} />
          <Route path="/vantagens" element={<PagVantagens />} />
          <Route path="/desvantagens" element={<PagDesvantagens />} />
          <Route path="/arquetipos" element={<PagArquetipos />} />
          <Route path="/favoritos" element={<PagFavoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
