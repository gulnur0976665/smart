import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const CreateBasketSlice = createSlice({
  name: "CREATE_BASKET",
  initialState,
  reducers: {
    createBasket(state, action) {
      let newPro = { ...action.payload, quentity: 1 };
      state.basket = [...state.basket, newPro];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    inCrement(state, action) {
      let plus = state.basket.map((el) =>
        el.id === action.payload ? { ...el, quentity: el.quentity + 1 } : el
      );
      state.basket = plus;
      localStorage.setItem("basket", JSON.stringify(plus));
    },
    desCrement(state, action) {
      let minus = state.basket.map((el) =>
        el.id === action.payload
          ? { ...el, quentity: el.quentity > 1 ? el.quentity - 1 : 1 }
          : el
      );
      state.basket = minus;
      localStorage.setItem("basket", JSON.stringify(minus));
    },
    deleteBasket(state, action) {
      let filterDelete = state.basket.filter((el) => el.id !== action.payload);
      state.basket = filterDelete;
      localStorage.setItem("basket", JSON.stringify(filterDelete));
    },
    removeItem(state, action) {
      state.basket = [];
      localStorage.removeItem("basket")
    },
  },
});
export const { createBasket, inCrement, desCrement, deleteBasket,removeItem } =
  CreateBasketSlice.actions;
export default CreateBasketSlice.reducer;
