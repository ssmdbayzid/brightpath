
import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],

    addToCart: (item:any) => set((state:any) => {
        const existingItem = state.cart.find((cartItem:any) => cartItem.id === item.id);
        if (existingItem) {
            return {
                cart: state.cart.map((cartItem:any) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                ),
            };
        }
        localStorage.setItem('cart', JSON.stringify([...state.cart, item]));
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

    removeFromCart: (id:any) => set((state:any) => ({
        cart: state.cart.filter((item:any) => item.id !== id)

    })),

    resetCart: () => set({ cart: [] }),
}));

export default useCartStore;