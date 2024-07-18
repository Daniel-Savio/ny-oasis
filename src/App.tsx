import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <header className=" fixed top-0 flex p-2 justify-center w-full">
        <div className="flex backdrop-blur-sm bg-white/30 rounded-lg px-10 w-3/4 justify-around">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
