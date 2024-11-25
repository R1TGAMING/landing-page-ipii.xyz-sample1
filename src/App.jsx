import { useState } from "react";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        {/* navbar */}
        <Navbar />

        <HomePage />

        <ul className=" circles ">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
