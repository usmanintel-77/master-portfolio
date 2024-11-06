import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="relative">
      <Background />
      <div className="relative z-10 text-white">
        <Navbar />
        <main className="min-h-[calc(100vh-120px)] flex items-center justify-center text-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
