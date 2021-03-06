//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import PassageVariablePage from "./components/Pages/PassageVariablePage";
import PassageFonctionPage from "./components/Pages/PassageFonctionPage";
import PageIntroduction from "./components/Pages/PageIntroduction";
import MiseEnPlacePage from "./components/Pages/MiseEnPlacePage";
import SommairePage from "./components/Pages/SommairePage";
import CodePassageVariable from "./components/Pages/CodePassageVariable";
import ScrollToTop from "./components/Autres/ScrollToTop";
import CodePassageFonction from "./components/Pages/CodePassageFonction";
import Stock from "./components/Pages/Stock";
import Routage from "./components/Pages/Routage";
import Routage1 from "./components/Pages/Routage1";
import Routage2 from "./components/Pages/Routage2";
import Routage3 from "./components/Pages/Routage3";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MiseEnPlace" element={<MiseEnPlacePage />} />
        <Route path="/Introduction" element={<PageIntroduction />} />
        <Route path="/Sommaire" element={<SommairePage />} />
        <Route path="/PassageVariable" element={<PassageVariablePage />} />
        <Route path="/PassageVariableCode" element={<CodePassageVariable />} />
        <Route path="/PassageFonctionCode" element={<CodePassageFonction />} />
        <Route path="/PassageFonction" element={<PassageFonctionPage />} />
        <Route path="/PremierExercice" element={<Stock />} />
        <Route path="/Routage" element={<Routage />} />
        <Route path="/RoutagePage1" element={<Routage1 />} />
        <Route path="/RoutagePage2" element={<Routage2 />} />
        <Route path="/RoutagePage3" element={<Routage3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
