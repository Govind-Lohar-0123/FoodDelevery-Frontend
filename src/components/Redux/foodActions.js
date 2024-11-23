



export function addFoodCardToStorage(food) {

    let data = getFoodCardsFromStorage();
    if (data == undefined || data == null) data = [];
    data.push(food);
    data = JSON.stringify(data);
    localStorage.setItem("foodCards", data);
}
export function getFoodCardsFromStorage() {
    let data = JSON.parse(localStorage.getItem("foodCards"));
    if (data == null || data == undefined) return [];
    return data;
}
export function removeFoodCardFromStorage(removeId) {
    let state = getFoodCardsFromStorage();
    state.splice(removeId, 1);
    let data = JSON.stringify(state);
    localStorage.setItem("foodCards", data);
}
export function updateFoodCardToStorage({ foodItem, idx }) {

    let state = getFoodCardsFromStorage();


    state[idx] = { ...state[idx], ...foodItem };
    let data = JSON.stringify(state);
    localStorage.setItem("foodCards", data);
}
export function clearFoodCardsFromStorage() {

    localStorage.removeItem("foodCards");

}



