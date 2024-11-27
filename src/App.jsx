import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="h-screen bg-cover">
        <ul className=" circles w-full">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        {/* navbar */}
        <Navbar />

        <HomePage />

        <Footer />
      </div>
    </>
  );
}

export default App;
