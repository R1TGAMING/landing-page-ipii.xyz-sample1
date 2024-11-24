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
      </div>
    </>
  );
}

export default App;
