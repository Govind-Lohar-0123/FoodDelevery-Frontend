import react, { useEffect } from "react";
import { NavLink } from "react-router-dom";


import { getUser } from "../auth/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { getMyAllCards, removeFromCart } from "../../Redux/actions/foodAction.js";
import { getMyOrders } from "../../Redux/actions/orderAction.js";
export default function MyCard() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrders(getUser().email));


  }, [])
  const myOrders = useSelector((state) => state.getMyOrdersData)
  
  return (<>


    <div className="profile-right col-div mt-5  " id="myorder" >

      {
        (myOrders.length > 0) ?
          <>
            <table className="table-div mt-5 ">
              <caption className="text-white text-center font-weight-bold">My Orders</caption>
              <thead>

                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Shape</th>
                  <th>Price</th>
                  <th>Picture</th>

                </tr>
              </thead>
              <tbody>
                {

                  myOrders.map((item, i) => {
                    console.log(item)
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item.foodName}</td>
                        <td>{item.foodQty}</td>
                        <td>{item.foodSize}</td>
                        <td>{item.foodPrice}</td>
                        <td  style={{width:"150px",height:"150px"}}><img src={item.foodImg} className="d-block w-100 h-100" alt="" /></td>
                      </tr>
                    )
                  })

                }

              </tbody>
            </table>

          </> : <div className=" h-100 text-center h1">My Orders is Empty </div>
      }
    </div>


  </>)
}
