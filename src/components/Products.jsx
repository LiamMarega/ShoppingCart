import React from "react";
import "./Products.css";
function Products({ data, addToCart }) {
  const { name, price, id, img } = data;
  return (
    <div className="Products">
      <div className="nombre">
      <h3>
        {" "}
        {name}: ${price}
      </h3>
      </div>
      <div className="imagenn">
      <img src={img} alt="comida" width="50px" />
      </div>
      <button className="buttonAdd" onClick={() => addToCart(id)}>
        Add To Cart
      </button>
    </div>
  );
}

export default Products;
