export const GetStateData = () => {
    const state = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
    return state;
};