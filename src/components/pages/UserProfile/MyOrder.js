import react, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStateCard, useDispatchCard } from "../CardProvider.js";
import { useAddOrderMutation, useGetOrderMutation } from "../../../services/orderSlice.js";
import { getUser } from "../auth/userActions.js";

export default function MyOrder() {

  const state = useStateCard();
  let loggedUser = getUser();
  const [getMyOrder, responseInfo] = useGetOrderMutation();
  const [order_data, setOrder_data] = useState([]);

  const handleGetOrder = async () => {
    const result = await getMyOrder(loggedUser);
    if(result.data.status==false)return;
    setOrder_data(result.data.order_data);
    
  }
  useEffect(() => {
    handleGetOrder();

  }, [])


  return (<>


    <div className="profile-right col-div mt-5 bg-secondary " id="myorder">
      {
        (order_data.length != 0) ?
          <>
            <table className="table-div  ">
              <caption className="text-white text-center font-weight-bold">My Order</caption>
              <thead>

                <tr>
                  <th>Order</th>
                  <th>FoodName</th>
                  <th>Quantity</th>
                  <th>Shape</th>
                  <th>Price</th>
                  

                </tr>
              </thead>
              <tbody>
                {
                   
                  order_data.map((orderArr, i) => {
                   
                    return orderArr.map((item, j) => {
                       if(j==0)return <tr className="bg-dark "><td colSpan="5" className="text-white">{item.order_date}</td></tr>
                      return (
                        <tr>
                          <td>{j}</td>
                          <td>{item.foodName}</td>
                          <td>{item.foodQty}</td>
                          <td>{item.foodSize}</td>
                          <td>{item.foodPrice}</td>
                          
                        </tr>

                      )
                    })


                  })

                }

              </tbody>
            </table>


          </> : <div className="text-white text-center h1">MyCard is Empty </div>
      }
    </div>


  </>)
}