import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
