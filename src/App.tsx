import "./App.css";
import Icon from "../public/Icon.png";
// import IconBg from "../public/Icon-bg.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <BrowserRouter>
      <header className=" fixed top-0 flex p-2 justify-center w-full align-middle">
        <img
          className=" absolute drop-shadow-2xl left-3 top-1 w-11"
          src={Icon}
          alt=""
        />

        <Tabs className="relative flex" defaultValue="home">
          <TabsList className=" flex bg-transparent w-full gap-4 justify-around">
            <div
              id="trail"
              className="absolute -z-10 backdrop-blur-md h-8 bg-white/20 rounded-full px-40 w-full shadow-lg"
            ></div>

            <TabsTrigger className="rounded-full py-0.5 px-5" value="home">
              <Link className="w-full" to="/">
                Home
              </Link>
            </TabsTrigger>

            <TabsTrigger className="rounded-full py-0.5 px-5" value="about">
              <Link to="/about">About</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
