import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";



const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Optionally, define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Subscribe to state changes
store.subscribe(() => {
    const state = store.getState();
    console.log("Updated state:", state);
    // saveState(state);
});

export default store;