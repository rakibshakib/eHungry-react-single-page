import React, { useEffect, useState } from "react";
import "./FoodData.css";
import FoodShop from "../FoodShop/FoodShop";
import CartFood from "../CartFood/CartFood";
import Header from "../Header/Header";

const FoodData = () => {
  const [foods, setFoods] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  // load all the food start name with a
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
      });
  }, []);
  const addToCartHandle = (food) => {
    const newCart = [...cartItem, food];
    setCartItem(newCart);
  };
  return (
    <>
      <Header />
      <div className="food-shop">
        <div className="food-container">
          {foods.map((food) => (
            <FoodShop
              food={food}
              key={food.idMeal}
              addToCartHandle={addToCartHandle}
            />
          ))}
        </div>
        <div className="food-cart">
          <CartFood cartItem={cartItem} />
        </div>
      </div>
    </>
  );
};

export default FoodData;
