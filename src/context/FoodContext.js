import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  selectedFavorite: [],
  itemsCounterFav:0,
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce((total, food) => total + food.quantity, 0);
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(3);

  return { itemsCounter, total };
};


const sumFoodsFavorite = (itemsFood) => {
  const itemsCounterFav = itemsFood.reduce((totals, foodFav) => totals + foodFav.quantity, 0);
  return { itemsCounterFav };
};



const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkOut: false,
      };

      case "ADD-FAVORITE":
        if (
          !state.selectedFavorite.find((items) => items.id === action.payload.id)
        ) {
          state.selectedFavorite.push({
            ...action.payload,
            quantity: 1,
          });
        }
        return {
          ...state,
          selectedFavorite: [...state.selectedFavorite],
          ...sumFoodsFavorite(state.selectedFavorite),
        };

        case "REMOVE-ITEM-FAV":
          const newSelectedItemsFav = state.selectedFavorite.filter(
            (items) => items.id !== action.payload.id
          );
          return {
            ...state,
            selectedFavorite: [...newSelectedItemsFav],
            ...sumFoodsFavorite(newSelectedItemsFav),
          };
       
  
    case "REMOVE-ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "INCRESS":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      console.log(indexI);
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
case "REMOVESITEM":let removes=state.selectedItems.filter((remItem)=>
 remItem.id !== action.payload.id)
return{
  ...state,
  ...sumItems(state.selectedItems),
  selectedItems:[...removes],
  

}
    case "DECRESS":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      console.log(indexD);

      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: false,
      };
      default:
        return  state ;
    }
    
};
export const CartContext = createContext();
const FoodContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default FoodContext;
