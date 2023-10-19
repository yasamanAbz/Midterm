import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Shop from "./components/shop";
import Product from "./components/product";
import Navbar from "./components/navbar";
import Home from "./components/home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/shop" Component={Shop} />
        <Route path="/product" Component={Product} />
      </Routes>
    </Router>
  );
}

export default App;
