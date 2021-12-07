import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pName: "Pendrive Sandisks",
  pId: 1,
  pImage:
    "https://4.imimg.com/data4/PN/ON/MY-19282248/sandisk-16gb-pen-drive-500x500.jpg",
  pRating: 3,
  pPrice: 343.6,
  pDescription:
    "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sendProduct: (state, action) => {
      (state.pId = action.payload.pId),
        (state.pName = action.payload.pName),
        (state.pImage = action.payload.pImage),
        (state.pRating = action.payload.pRating),
        (state.pPrice = action.payload.pPrice);
      state.pDescription = action.payload.pDescription;
    },
  },
});

export const { sendProduct } = productSlice.actions;

export const selectPId = (state) => state.product.pId;
export const selectPName = (state) => state.product.pName;
export const selectPImage = (state) => state.product.pImage;
export const selectPRating = (state) => state.product.pRating;
export const selectPPice = (state) => state.product.pPrice;
export const selectPDescription = (state) => state.product.pDescription;

export default productSlice.reducer;
