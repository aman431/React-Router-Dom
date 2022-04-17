import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
// import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
