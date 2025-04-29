import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import TrenB from "./pages/Tren";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // HTML5 backend'i
import { TouchBackend } from "react-dnd-touch-backend"; // Touch backend'i
import Second from "./pages/Second";
import TestQuestion from "./pages/TestQuestion";
import Game from "./pages/Game";
import Explorer from "./pages/Explorer";
import Yenibilgiler from "./pages/Yenibilgiler";
import MainTest from "./pages/MainTest";
import Frankfurt from "./pages/Frankfurt";
import Sorular from "./pages/Sorular";
import Metinler from "./pages/Metinler";
import Mektup from "./pages/Mektup";
import Sifatlar from "./pages/Sifatlar";
import Präpos from "./pages/Präpos";
import YeniVerb from "./pages/YeniVerb";
import MainBuch from "./pages/Buch/MainBuch";
const isMobile = window.innerWidth <= 768; // Mobil cihazları belirlemek için basit bir kontrol

const App = () => {
  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Test />} />
          <Route path="/tren" element={<TrenB />} />
          <Route path="/second" element={<Second />} />

          <Route path="/game" element={<Game />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/test1" element={<TestQuestion />} />
          <Route path="/yeni" element={<YeniVerb />} />
          <Route path="/maintest" element={<MainTest />} />
          <Route path="/frank" element={<Frankfurt />} />
          <Route path="/soru" element={<Sorular />} />
          <Route path="/metin" element={<Metinler />} />
          <Route path="/mektup" element={<Mektup />} />
          <Route path="/sifat" element={<Sifatlar />} />
          <Route path="/buch" element={<MainBuch />} />
          <Route path="/prä" element={<Präpos />} />
          <Route path="/yeniverb" element={<Yenibilgiler />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
};

export default App;
