import { createSlice } from '@reduxjs/toolkit';

// Utility to load cart from localStorage
const loadCartFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
};

// Initial state
const initialState = {
    cart: loadCartFromLocalStorage(),
    cartTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state:any, action:any) => {
            const existingItem = state.cart.find((item:any) => item._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state:any, action:any) => {
            state.cart = state.cart.filter((item:any) => item._id !== action.payload);
        },
        resetCart: (state:any) => {
            state.cart = [];
        },
        getTotal(state:any) {
            state.cartTotal =  state.cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);
        },
    },
});

export const { addToCart, removeFromCart, resetCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;