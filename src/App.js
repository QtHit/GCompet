import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeuvicUrl from "./pages/LienNeuvic";
import LienPerso from "./pages/LienPerso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/neuvic" element={<NeuvicUrl/>} />
        <Route path="/perso" element={<LienPerso/>} />
        <Route path="*" element={<LienPerso/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
