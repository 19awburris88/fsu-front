import React from "react";
import { Routes, Route } from "react-router-dom";
import Departments from "./pages/Departments";
import Faculty from "./pages/Faculty";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />g
      <Routes>
        <Route path="/departments" element={<Departments />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </div>
  );
}

export default App;
