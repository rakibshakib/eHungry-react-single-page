import React, { useEffect, useState } from "react";
import "./FoodData.css";
import FoodShop from "../FoodShop/FoodShop";
import CartFood from "../CartFood/CartFood";
import Header from "../Header/Header";

const FoodData = () => {
  const [foods, setFoods] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [displayFood, setDisplayFood] = useState([]);
  // load all the food start name with a
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
        setDisplayFood(data.meals);
      });
  }, []);

  const handleSearchMeal = (event) => {
    const searchText = event.target.value;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        searchText ? `${searchText}` : `a`
      }`
    )
      .then((res) => res.json())
      .then((data) => setDisplayFood(data.meals));
  };
  const addToCartHandle = (food) => {
    const newCart = [...cartItem, food];
    setCartItem(newCart);
  };
  // console.log(foods)
  return (
    <>
      <Header handleSearchMeal={handleSearchMeal} />
      <div className="food-shop">
        <div className="food-container">
          {displayFood.map((food) => (
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
