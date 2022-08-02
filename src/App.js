import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Pages/> } />
      </Routes>
    </Router>
  )
}