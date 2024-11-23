import { addFoodCardToStorage, clearFoodCardsFromStorage, getFoodCardsFromStorage, removeFoodCardFromStorage, updateFoodCardToStorage } from "../foodActions.js";

export const foodCartReducer = (state = [], actions) => {

    switch (actions.type) {

        case "ADD":
            addFoodCardToStorage(actions.payload);
            return getFoodCardsFromStorage();
        case "STORE":
            
            return getFoodCardsFromStorage();

        case "REMOVE":
            removeFoodCardFromStorage(actions.payload);
            return getFoodCardsFromStorage();
        case "UPDATE":
            updateFoodCardToStorage(actions.payload);
            
            return getFoodCardsFromStorage();
        case "CLEAR":
            
            clearFoodCardsFromStorage();
            return state;
        default:
            return getFoodCardsFromStorage();
    }

}

















export function getAllFoodsReducer(state = { status: false, foods: [] }, actions) {

    switch (actions.type) {

        case "getAllFoods":
            return actions.payload;

        default:
            return { status: false, foods: [] };

    }
}

