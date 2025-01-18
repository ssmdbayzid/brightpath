import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

const saveState = (state) => {
    try {
        localStorage.setItem("cartState", JSON.stringify(state.cart));
    } catch (error) {
        console.error("Failed to save state to localStorage", error);
    }
};

// Load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("cartState");
        return serializedState ? { cart: JSON.parse(serializedState) } : undefined;
    } catch (error) {
        console.error("Failed to load state from localStorage", error);
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: loadState(),
});
// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Optionally, define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Subscribe to state changes
store.subscribe(() => {
    const state = store.getState();
    console.log("Updated state:", state);
    saveState(state);
});

export default store;