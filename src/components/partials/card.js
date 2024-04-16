import React, { Children ,useState} from "react";
import { useDispatchCard, useStateCard } from "../pages/CardProvider.js";
import { getToken } from "../pages/auth/tokenAction.js";

function Card(props) {
    const dispatch=useDispatchCard();
    const state=useStateCard();
    const [foodQty,setFoodQty]=useState(1);
    const [foodSize,setFoodSize]=useState("Full");
    let price=(foodSize=="Full")?props.item.foodPrice:(props.item.foodPrice/2);
   
    let finalPrice=(foodQty*price);
    function handleAddToCard (e){
        e.preventDefault();
        if(getToken()==null)return ;
        
        let foodItem={foodQty,foodSize,foodId:props.item._id,foodPrice:finalPrice,foodName:props.item.foodName,foodImg:props.item.foodImg};
        
     
        
        let isSameSize=Boolean(false);
        for(let food of state){
            if(food.foodId==props.item._id && food.foodSize==foodSize){
                isSameSize=true;break;
            }
        }
       if(isSameSize)
            {   
                foodItem={foodQty,foodId:props.item._id,foodPrice:finalPrice,foodSize};
                dispatch({type:"UPDATE",foodItem});
                return;
        }
        
        
        dispatch({type:"ADD",foodItem});
        
    }

   
    return (<>


    
        <div  className="card  col-div " >
            <img src={props.item.foodImg} className="card-img " />
            <div className="card-body p-0 ">
                <p className="card-title font-weight-bold" >{props.item.foodName}</p>
                <div className="mt-4 row-div">
                    <select className="bg-primary col-div food-quant text-black" onChange={(e)=>setFoodQty(e.target.value)}>
                        {
                            [1, 2, 3, 4, 5, 6].map((q, i) => {
                                return (<option key={i}  className="text-white">{q}</option>)
                            })
                        }
                    </select>
                    <select className="bg-primary col-div food-size text-black" onChange={e=>{
                        setFoodSize(e.target.value);}}>
                        {
                            props.item.option.map((quant, i) => {
                                return (<option  value={quant}>{quant}</option>)
                            })
                        }

                    </select>
                    <span className="text-black col-div font-weight-bold food-price" >{finalPrice}/</span>

                </div>
            </div>
            <div className="card-footer text-center ">
                <button className="btn btn-primary text-white" onClick={handleAddToCard}>Add To Card</button>
            </div>
        </div>



    </>)
}
export default Card;