import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import TrenB from "./pages/Tren";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // HTML5 backend'i k
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Test />} />
          <Route path="/tren" element={<TrenB />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
};

export default App;
