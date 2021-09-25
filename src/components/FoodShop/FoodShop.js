import React from "react";
import "./FoodShop.css";
const FoodShop = (props) => {
  const { strMeal, strMealThumb, strCategory, strInstructions } = props.food;
  const { addToCartHandle } = props;
  return (
    <>
      <p>Item Found: {props.food.length}</p>
      <div className="food-card">
        <figure className="card-img">
          <img src={strMealThumb} alt="" />
        </figure>
        <div className="food-details">
          <h5>Food Title: {strMeal}</h5>
          <p>Category: {strCategory}</p>
          <p>Instruction: {strInstructions.slice(0, 100) + "..."}</p>
        </div>
        <button
          className="add-to-cart"
          onClick={() => addToCartHandle(props.food)}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default FoodShop;
