import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./components/Footer/Footer";
import RoadConstructions from "./components/RoadConstructions/RoadConstructions";
import UnderDevelopment from "./Pages/UnderDevelopment";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="main-app"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/construction/roads" element={<RoadConstructions />}></Route>
            <Route path="/construction/buildings" element={<RoadConstructions />}></Route>
            <Route path="/*" element={<UnderDevelopment />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
