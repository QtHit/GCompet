import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GoPage from "./pages/GoPage";
import PremierePage from "./pages/PremierePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/url/:urldonnee" element={<GoPage/>} />
        <Route path="*" element={<PremierePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
