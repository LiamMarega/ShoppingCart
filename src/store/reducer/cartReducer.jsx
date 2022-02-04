import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  REMOVE_ALL,
  CLEAR_CART,
  ACTUALIZO_CART,
} from "../action/cartAction.jsx";

export const cartInitialState = {
  products: [
    {
      id: 1,
      name: "Leche",
      price: 100,
      img: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c1c4.png",
      quantity: 0,
    },
    {
      id: 2,
      name: "Carne",
      price: 400,
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046820.png",
      quantity: 0,
    },
    {
      id: 3,
      name: "Yogur",
      price: 200,
      img: "https://www.pngplay.com/wp-content/uploads/4/Yogurt-PNG-HD-Quality.png",
      quantity: 0,
    },
    {
      id: 4,
      name: "Pan",
      price: 500,
      img: "https://www.pngmart.com/files/16/Vector-Loaf-Bread-PNG-File.png",
      quantity: 0,
    },
    {
      id: 5,
      name: "Lechuga",
      price: 300,
      img: "https://cdn-icons-png.flaticon.com/512/424/424227.png",
      quantity: 0,
    },
  ],
  cart: [],
};

export const initializer = (initialValue = cartInitialState) =>
  JSON.parse(localStorage.getItem("cartprueba")) || initialValue;

export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === newItem.id) {
              localStorage.setItem(
                "cartprueba",
                JSON.stringify([
                  ...state.cart,
                  { ...item, quantity: item.quantity + 1 },
                ])
              );
              return { ...item, quantity: item.quantity + 1 };
            } else {
              /* localStorage.setItem("cartprueba", JSON.stringify(item)); */
              console.log("item", item);
              return item;
            }
          }),
        };
      } else {
        localStorage.setItem(
          "cartprueba",
          JSON.stringify([...state.cart, { ...newItem, quantity: 1 }])
        );
        return {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
      }
    }

    case REMOVE_TO_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete?.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case REMOVE_ALL: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return cartInitialState;
    }

    case ACTUALIZO_CART: {
      console.log("carritoo", action.payload);
      var hash = {};
      action.payload = action.payload.filter(function (current) {
        var exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
      });
      return {
        ...state,
        cart: action.payload.map((item) => {
          return item;
        }),
      };
    }

    default:
      return state;
  }
}
