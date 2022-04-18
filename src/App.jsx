import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home.jsx";
import { About } from "./component/About.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { OrderSummary } from "./component/OrderSummary.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
      </Routes>
    </div>
  );
}

export default App;
