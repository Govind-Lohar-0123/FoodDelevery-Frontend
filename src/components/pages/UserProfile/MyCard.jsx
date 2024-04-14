import react, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStateCard, useDispatchCard } from "../CardProvider.js";
import { useAddOrderMutation, useGetOrderMutation, useGetOrderQuery } from "../../../services/orderSlice.js";
import { getUser } from "../auth/userActions.js";
export default function MyCard() {

  const state = useStateCard();
  const cardDispatch = useDispatchCard();
  const [addOrderDispatch,responseInfo]= useAddOrderMutation();
  let totalPrice =state.reduce((prev,curr)=>{return parseInt(prev) + parseInt(curr.foodPrice)},[0]);
 
  let loggedUser=getUser();
  
 
  
  const handleDelete = (e, removeId) => {
    e.preventDefault();
    cardDispatch({ type: "DELETE", removeId });
  }

  const handleCheckout=async (e)=>{
    e.preventDefault();
    console.log(state);
    const result=await addOrderDispatch({order_data:[{order_date:new Date().toDateString()},...state],email:loggedUser});
    if(result.data.status==true)
      cardDispatch({type:"DROP"});
    
  }




  return (<>


    <div className="profile-right col-div mt-5 bg-secondary " id="myorder">
      {
        (state.length != 0) ?
          <>
            <table className="table-div mt-5 ">
              <caption className="text-white text-center font-weight-bold">My Order</caption>
              <thead>

                <tr>
                  <th>OrderID</th>
                  <th>FoodName</th>
                  <th>Quantity</th>
                  <th>Shape</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  
            state.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.foodName}</td>
                  <td>{item.foodQty}</td>
                  <td>{item.foodSize}</td>

                  <td>
                    {/* <button className="btn btn-yellow "><i class="fa-solid fa-trash"></i></button> */}
                    <NavLink to="#" className="btn btn-danger " onClick={(e) => handleDelete(e, i)}><i className="fa-2x fa-solid d-block fa-trash text-white"></i></NavLink>

                  </td>

                </tr>
                )
            })
            
          }

              </tbody>
            </table>
            <p className="text-white mt-5 h2" >Total Price :- {totalPrice}/</p>
            <button className="btn btn-primary mt-2" onClick={handleCheckout}>Checkout</button>
          </> : <div className="text-white text-center h1">Card is Empty </div>
      }
    </div>


  </>)
}