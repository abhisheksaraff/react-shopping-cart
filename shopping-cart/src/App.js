import { HashRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div class="app">
      <NavigationBar/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
