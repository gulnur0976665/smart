import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  search: [],
};

export const CreateProductSlice = createSlice({
  name: "CREATE_PRODUCT",
  initialState,
  reducers: {
    createProduct(state, action) {
      state.product = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(state.product));
    },
    searchProduct (state,action) {
      let filterSearch = state.product.filter((item) => item.title.includes(action.payload.toUpperCase()))
      state.search = filterSearch
      console.log(filterSearch,'filterSearch');
    },
    deleteProduct(state,action){
      let filterDelete = state.product.filter((el) => el.id !== action.payload);
      state.product = filterDelete;
      localStorage.setItem("product", JSON.stringify(filterDelete));
    }
  },
});

export const { createProduct,searchProduct,deleteProduct } = CreateProductSlice.actions;
export default CreateProductSlice.reducer;
