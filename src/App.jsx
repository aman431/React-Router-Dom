import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home.jsx";
import { About } from "./component/About.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { OrderSummary } from "./component/OrderSummary.jsx";
import { NoMatch } from "./component/NoMatch";
import { Product } from "./component/Product";

import { FeaturedProduct } from "./component/FeaturedProduct";
import { NewProduct } from "./component/NewProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="product" element={<Product />}>
          <Route index element={<FeaturedProduct />}></Route>
          <Route path="featured" element={<FeaturedProduct />}></Route>
          <Route path="new" element={<NewProduct />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
