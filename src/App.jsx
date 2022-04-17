import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home.jsx";
import { About } from "./component/About.jsx";
import { Navbar } from "./component/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
