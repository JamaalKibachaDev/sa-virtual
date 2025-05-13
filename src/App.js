import React from "react";
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

const App = () => {
  return (
    <>
      <main className="app-main">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/hubs&dbs" element={<RouteDb />} />
          <Route path="/applyNow" element={<ApplyNow />} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/fleet" element={<Fleet/>} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
