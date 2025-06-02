import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RouteDb from "./pages/RouteDb";
import ApplyNow from "./pages/ApplyNow";
import Staff from "./pages/Staff";
import Fleet from "./pages/Fleet";
import Ranks from "./pages/Ranks";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="app-main">
       
          <ScrollToTop className="scroll__btn shadow" smooth />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/hubs&dbs" element={<RouteDb />} />
          <Route path="/applyNow" element={<ApplyNow />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/pilotRanks" element={<Ranks />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
