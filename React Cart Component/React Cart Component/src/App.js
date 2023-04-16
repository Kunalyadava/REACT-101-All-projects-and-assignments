import React, { useState } from "react";
import data from "./db.json";
import Product from "./components/Product";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState(data);

  const handleQty = (id, payload) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + payload,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            handleQty={handleQty}
          />
        ))}
      </div>
      <h1 id="total-cart" data-testid="total-cart">
        Total:{total}
      </h1>
    </div>
  );
}
