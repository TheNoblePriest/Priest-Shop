export const initialState = {
  basket: [],
  user: null,
  id: null,
  name: "",
  image: "",
  rating: null,
  price: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Product id ${action.id} is not in the Basket`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SEND_PRODUCT":
      return {
        ...state,
        id: action.id,
        name: action.name,
        rating: action.rating,
        image: action.image,
        price: action.price,
      };

    default:
      return state;
  }
};

export default reducer;

// that is the way we use it in the components
