import React, { useState } from "react";

import { Typography, FormControl, Box, InputLabel, Select, MenuItem } from "@mui/material";
import { getUser } from "./auth/userActions.js";
import { addToCart, updateToCart } from "../Redux/actions/foodAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken } from "./auth/tokenAction.js"
function FoodCard(props) {
    let dispatch = useDispatch();
    let { res: result, setResult } = props.action;
    const foodCards = useSelector((state) => state.getFoodCardData);
    const [foodQty, setFoodQty] = useState(1);
    const [foodSize, setFoodSize] = useState("full");
    let navigate = useNavigate();

    let price = parseInt(props.item.option[0][foodSize]);

    let finalPrice = (foodQty * price);
    function handleAddToCard(e) {
        let token = getToken();


        if (token == null || token == undefined) return navigate("/login");
        let user_email = getUser().email;
        let foodItem = { user_email, foodQty, foodSize, foodId: props.item._id, foodPrice: finalPrice, foodName: props.item.foodName, foodImg: props.item.foodImg };

        let idx = -1;
        for (let i = 0; i < foodCards.length; i++) {
            let a = foodCards[i].foodSize.toLowerCase();
            let b = foodSize.toLowerCase();
            if ((foodCards[i].foodId == props.item._id) && (a == b)) {
                idx = i;
                break;
            }
        }
        if (idx == -1) {
            dispatch(addToCart(foodItem));

        }
        else {
            dispatch(updateToCart({ foodItem, idx }));
        }
        window.location.reload();


    }



    return (<>



        <div className="card  col-div " >

            <img src={props.item.foodImg} className="card-img w-100" />
            <div className="card-body p-0 ">
                <p className="card-title font-weight-bold" >{props.item.foodName}</p>
                <div className="mt-4 row-div mb-2">
                    <select className="bg-primary w-100 food-quant text-black" onChange={(e) => { setFoodQty(e.target.value); }}>
                        {
                            [1, 2, 3, 4, 5, 6].map((q, i) => {
                                return (<option key={i} className="text-white">{q}</option>)
                            })
                        }
                    </select>

                    <FormControl fullWidth >

                        <select className="w-100"

                            value={foodSize}

                            onChange={e => {
                                setFoodSize(e.target.value);
                            }}
                        >
                            {
                                Object.keys(props.item.option[0]).map((k, idx) => {

                                    return <option style={{ fontSize: "14px" }} key={idx} value={props.item.option[0].k}>{k.toLowerCase()}</option>
                                })
                            }
                        </select>
                    </FormControl>








                    <span className="text-black  font-weight-bold food-price" >{finalPrice}/</span>

                </div>
            </div>

            <div className="card-footer text-center "  >
                <button className="btn btn-primary text-white" onClick={handleAddToCard}>Add To Card</button>
            </div>
        </div>



    </>)
}
export default FoodCard;