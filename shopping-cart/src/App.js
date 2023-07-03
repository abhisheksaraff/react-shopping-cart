import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
