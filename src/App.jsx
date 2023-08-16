import { useState } from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import ComingSoon from "./pages/ComingSoon";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router";

function App() {
  return (
    // <div>
    //   <Landing />
    //   {/*<LandingPage />*/}
    //   {/* <ComingSoon /> */}
    // </div>
    <Routes>
      <Route exact path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
