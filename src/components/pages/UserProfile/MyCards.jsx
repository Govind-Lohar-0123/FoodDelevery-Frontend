import react, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import { getUser } from "../auth/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { clearToCart, getMyAllCards, removeFromCart } from "../../Redux/actions/foodAction.js";
import { addMyOrders } from "../../Redux/actions/orderAction.js";
import { clientUrl } from "../../partials/data.js";

export default function MyOrders() {
  let dispatch = useDispatch();
  let [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    dispatch(getMyAllCards());

  }, [])
  const foodCards = useSelector((state) => state.getFoodCardData)


  useEffect(() => {
    getTotalPrice();
  }, [])
  let email = getUser().email;

  function getTotalPrice() {
    let price = foodCards.reduce((total, item) => total + item.foodPrice, 0);
    setTotalPrice(price);
  }

  const handleDelete = (e, removeId) => {
    e.preventDefault();
    dispatch(removeFromCart(removeId));

  }
  const handleCheckout = async (e) => {
    e.preventDefault();
    let myOrders = foodCards;

    dispatch(addMyOrders(email, myOrders));
    dispatch(clearToCart());
    window.location.href = clientUrl + "/myorders";

  }





  return (<>


    <div className="profile-right col-div mt-5 w-100" id="myorder">

      {
        (foodCards.length > 0) ?
          <>
            <table className="table-div mt-5 " >
              <caption className="text-white text-center font-weight-bold">My Cards</caption>
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

                  foodCards.map((item, i) => {

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
            <p className=" mt-5 h2" >Total Price :- {totalPrice}/</p>
            <button className="btn btn-primary mt-2" onClick={handleCheckout}>Checkout</button>
          </> : <div className=" h-100 text-center h1">Card is Empty </div>
      }
    </div>


  </>)
}
