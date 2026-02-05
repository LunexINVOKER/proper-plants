import { useState } from "react";
import plants from "./data";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    
    const existing = cart.find((item) => item.id === plant.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="app">
      <h1>Proper Plants</h1>
      <div className="content">
        <Plants plants={plants} addToCart={addToCart} />
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
}