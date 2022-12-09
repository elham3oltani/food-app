import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FoodContext from "./context/FoodContext";
import Cart from "./components/ShopCart";
import DetailFoods from "./components/DetailFoods";
function App() {
  return (
    <div>
      <FoodContext>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/home/:id" element={<DetailFoods />} />


        </Routes>

      </FoodContext>

    </div>
  );
}

export default App;
