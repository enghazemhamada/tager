import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addProduct: (state, actine) => {
            const findProduct = state.find(el => el.id === actine.payload.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = {...actine.payload, quantity: 1};
                return [...state, productClone];
            }
        },
        deleteProduct: (state, actine) => {
            return state.filter(product => product.id !== actine.payload.id);
        },
        incrementQuantity: (state, actine) => {
            const findProduct = state.find(el => el.id === actine.payload.id);
            findProduct.quantity += 1;
        },
        decrementQuantity: (state, actine) => {
            const findProduct = state.find(el => el.id === actine.payload.id);
            if (findProduct.quantity !== 1) {
                findProduct.quantity -= 1;
            }
        },
        clearCart: () => {
            return [];
        }
    }
});

export const {addProduct, deleteProduct, incrementQuantity, decrementQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;