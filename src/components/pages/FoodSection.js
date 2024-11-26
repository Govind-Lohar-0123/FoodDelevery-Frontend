import React, { useEffect, useState } from "react";

import FoodCard from "./FoodCard.js";
import { useDispatch, useSelector } from "react-redux";

import { CircularProgress, Box, Typography, styled } from "@mui/material";
import { getAllFoodsAction } from "../Redux/actions/foodAction.js";

const SearchComponent=styled(Box)(({theme})=>({
    "input":{
        [theme.breakpoints.down("md")]:{
        width:"80%!important" ,
            padding:"10px 20px"
        },
        fondSize:"18px!important",
        fontWeight:"bold",
        height:"50px"
    }
}))
function FoodSection() {
    let [search, setSearch] = useState("");
    const [res, setResult] = useState({ type: false, msg: "" });
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllFoodsAction());
    }, [res])

    const result = useSelector((state) => state.getAllFoodsData);

    return (<>
        <section id="food-section" >
            {
                ((result.status == false)) ? <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, textAlign: "center" }}>
                    <CircularProgress color="primary" />
                    <Typography className="text-bold text-muted">Loading</Typography>
                </Box> : ""
            }


            <SearchComponent className="w-100">
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Food Here." className="p-2 w-25 my-3 border-none outline-none mx-auto d-block" />
            </SearchComponent>
            {
                (result.status) ?

                    result.foodCategory.map((data, i) => {

                        return (


                            <section key={i} className=" food-category py-1">
                                <h2 className="h1 font-weight-bold m-0  food-category text-white  food-title  " >{data.categoryName}</h2>
                                <div className="row-div pt-5">
                                    {
                                        result.foodData.filter((item, i) => {


                                            return (item.categoryName.toLowerCase() == data.categoryName.toLowerCase()) && (item.foodName.toLowerCase().includes(search.toLowerCase()))
                                        }).

                                            map((item, i) => {
                                                
                                                return (<FoodCard item={item} key={i} action={{ res, setResult }} />)

                                            })
                                    }
                                </div>
                            </section>)
                    })

                    : ""
            }
        </section>








    </>)
}
export default FoodSection;