import React from "react";
import "./CartItem.css"
function CartItem({data, removeToCart}) {

  const { img, name, price, id, quantity} = data

  return (
    <div className="CardItem">
      <img src={img} alt="comida" width="50px"/>
      <h4>{name}</h4>
      <h5>${price} x {quantity} = ${price * quantity}.00</h5>
      <button className="buttonDel" onClick={() => removeToCart(id)}>Delete</button>
      
      <button className="buttonDel" onClick={() => removeToCart(id, true)}>Delete ALL</button>

    </div>
  );
}

export default CartItem;
