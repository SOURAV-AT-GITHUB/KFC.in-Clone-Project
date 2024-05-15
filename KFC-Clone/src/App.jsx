// import './App.css'
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/HomePage/Home";
import { StartOrder } from "./Components/StartOrder";
import { Footer } from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./Pages/MenuPage/MenuPage";
import Testing from "./Testing";
import { useContext, useEffect, useState } from "react";
import { cartUpdater } from "./Contexts/CartUpdaterContext";
import { CartPage } from "./Pages/CartPage/CartPage";

function App() {
  const categories = ["Appetizers", "Main Course", "Desserts"];
  const items = [
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 1,
      name: "Salad",
      description: "Fresh salad with veggies",
      price: 10,
      category: "Appetizers",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Delicious pizza with toppings",
      price: 15,
      category: "Main Course",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
    {
      id: 3,
      name: "Cake",
      description: "Yummy cake with frosting",
      price: 8,
      category: "Desserts",
    },
  ];

  const [countAndPrice, setCountAndPrice] = useState({
    count: 0,
    totalAmmount: 0,
  });
  const { updater, setUpdater } = useContext(cartUpdater);
  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    function updaterFunction() {
      let total = cartData.reduce(function (acc, ele) {
        return acc + ele.price * ele.quantity;
      }, 0);

      let count = cartData.reduce(function (acc, ele) {
        return acc + ele.quantity;
      }, 0);
      setCountAndPrice({
        count: count,
        totalAmmount: parseFloat(total).toFixed(2),
      });
    }
    updaterFunction();
  }, [updater]);
  return (
    <>
      <div className="home-loading-animation">
        <figure>
          <svg
            viewBox="0 0 42 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path className="strip-1" d="M0 0h8v20H0z"></path>
            <path className="strip-2" d="M16 0h8v20h-8z"></path>
            <path className="strip-3" d="M32 0h8v20h-8z"></path>
          </svg>
        </figure>
      </div>
      <Navbar count={countAndPrice.count} total={countAndPrice.totalAmmount} />
      <StartOrder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:category" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage count={countAndPrice.count} total={countAndPrice.totalAmmount} />} />
        <Route
          path="/testing"
          element={<Testing categories={categories} items={items} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
