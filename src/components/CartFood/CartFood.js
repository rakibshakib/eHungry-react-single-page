import React from "react";
import "./CartFood.css";

const CartFood = (props) => {
  // console.log(props.cartItem);
  //   const { strMeal, strMealThumb } = props.cartItem;
  return (
    <div>
      <h2>Added Item: {props.cartItem.length}</h2>
      {props.cartItem.map((item) => (
        <li>
          <div className="cart">
            <figure className="cart-img">
              <img src={item.strMealThumb} alt="" />
            </figure>
            <h4>{item.strMeal}</h4>
          </div>
        </li>
      ))}
    </div>
  );
};

export default CartFood;
