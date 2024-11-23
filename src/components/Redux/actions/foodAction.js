
import axios from "axios";
import { url } from "../../partials/data";


export const addToCart = (foodItem) => async (disptach) => {
   
    disptach({ type: "ADD", payload: foodItem })
}
export const getMyAllCards = () => async (disptach) => {
   
    disptach({ type: "STORE" })
}
export const removeFromCart = (removeId) => async (disptach) => {
    disptach({ type: "REMOVE", payload: removeId })
}
export const updateToCart = (data) => async (disptach) => {
    disptach({ type: "UPDATE", payload: data})
}
export const clearToCart = () => async (disptach) => {
    
    disptach({ type: "CLEAR" })
}















export const getAllFoodsAction = () => async (disptach) => {


    try {
        let result = await axios.get(url + "/foodApi/get-all-foods");

        disptach({ type: "getAllFoods", payload: result.data });

    }
    catch (err) {

        return;
    }
}


