import React, { useEffect, useReducer, createContext, useState } from "react";
import { cartInitialState, cartReducer } from "../store/reducer/cartReducer";
import CartItem from "./CartItem.jsx";
import Products from "./Products.jsx";
import "./ShoppingCart.css";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  REMOVE_ALL,
  CLEAR_CART,
  ACTUALIZO_CART,
} from "../store/action/cartAction";

export const CartContext = createContext();

function ShoppingCart() {
  //Reducer
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { cart, products } = state;
  
  let prueba= []

  useEffect(() => {
    prueba = JSON.parse(localStorage.getItem("cartprueba"));
    console.log("prueba",prueba);
    if (cart.length < prueba?.length) {
       dispatch({ type: ACTUALIZO_CART, payload: prueba})
     }
  }, []);
  

  //CARRTIO --> cargarlo
  //GUARDAR CARRITO --> en el local storage
  //IMPRIMIR VALOR DEL CARRITO.
  //

  //Funciones del carrito de compra
  const addToCart = (id) => {
    dispatch({ type: ADD_TO_CART, payload: id });
    
  };

  const removeToCart = (id, all = false) => {
    if (all) {
      dispatch({ type: REMOVE_ALL, payload: id });
    } else {
      dispatch({ type: REMOVE_TO_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <div className="ShoppingCart">
      <h3>Carrito</h3>
      <div className="contaierShopping">
        <div className="productosShopping">
          <h4>Productos</h4>

          <article className="box">
            {products?.map((product) => (
              <Products key={product.id} data={product} addToCart={addToCart} />
            ))}
          </article>
        </div>
        <div className="carritoShopping">
           <img className="imgCarrtio" src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="carrito" width="50px"/>
          <article className="box">
            <button className="clearCart" onClick={clearCart}>Clear Cart</button>
            {cart &&
              cart?.map((item, index) => (
                <CartItem key={index} data={item} removeToCart={removeToCart} />
              ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
