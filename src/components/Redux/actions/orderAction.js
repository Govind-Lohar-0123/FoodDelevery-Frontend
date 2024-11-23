
import axios from "axios";
import { url } from "../../partials/data";
export const addOrdersAction = (order_data, email) => async (disptach) => {


    try {
        let result = await axios({
            method: "post",
            url: `${url}/orderApi/add-order`,
            data: { order_data, email }
        })

        disptach({ type: "addOrder", payload: result.data });

    }
    catch (err) {

        return;
    }
}
export const getOrdersActions = (email) => async (disptach) => {


    try {
        let result = await axios({
            method: "post",
            url: `${url}/orderApi/get-orders`,
            data: { email }
        })

    }
    catch (err) {

        return;
    }
}
export const addMyOrders = (email, myOrders) => async (disptach) => {


    try {
        let result = await axios({
            method: "post",
            url: `${url}/add-my-orders`,
            data: { user_email: email, myOrders }
        })

    }
    catch (err) {

        return;
    }
}
export const getMyOrders = (user_email) => async (disptach) => {


    try {
        let result = await axios({
            method: "post",
            url: `${url}/get-my-orders`,
            data: { user_email }
        })
       
        disptach({ type: "getMyOrders", payload: result.data.myOrders })

    }
    catch (err) {

        return;
    }
}


