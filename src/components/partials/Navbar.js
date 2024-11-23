

import React, { useEffect, useState } from "react";
import "../css/navbar.css";
import "../css/common.css";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/profile.css";
import "../css/responsive.css";

import { getToken, removeToken } from "../pages/auth/tokenAction.js";

import { getUser, removeUser } from "../pages/auth/userActions.js";
import logOut from "../pages/auth/logout.js";
import { useSelector } from "react-redux";





function Navbar() {
    const isLogin = getToken();
    let loggedUser = getUser();
    // let state = useStateCard();
    let cardCount = useSelector((state) => state.getFoodCardData).length;
    const navigate = useNavigate();



    return (
        <>
            <header>
                <div className="container-fluid">

                    <nav>
                        <div className="logo text-white">GoFood</div>
                        <input type="checkbox" className="d-none" name="" id="check" />
                        <label htmlFor="check" className="menu-bar"><i className="fa-2x fa-solid fa-bars text-white"></i></label>

                        <ul>
                            <li><NavLink to="/" className="active">Home</NavLink></li>
                            {
                                (isLogin) ? <li className="mx-4"><NavLink to="/myorders">MyOrder</NavLink></li>
                                    : ""
                            }

                            <li>

                                <ul className="gap-5 login-sign w-100">
                                    {(isLogin == null) ?
                                        <>
                                            <li><NavLink to="/login" className="btn bg-white login-btn">Login</NavLink></li>
                                            <li><NavLink to="/signup" className="btn bg-white register-btn">SignUp</NavLink></li>
                                        </> :
                                        <>
                                            <li><NavLink to="/profile" className=" text-transform-lowercase " style={{ textTransform: "lowercase" }}>{loggedUser.email}</NavLink></li>
                                            <li><NavLink to="#" onClick={logOut} className="btn bg-white  text-dark">Logout</NavLink></li>
                                        </>

                                    }
                                    {isLogin ?
                                        <li className="card-shopping p-2 " >
                                            <NavLink to="/mycards" className="text-dark " >
                                                <span className="mx-auto my-auto " id="badge">{cardCount}</span>
                                                <i className="  fa-solid fa-cart-shopping"></i>
                                                Card
                                            </NavLink>
                                        </li> : ""
                                    }
                                </ul>



                            </li>
                        </ul>

                    </nav>
                </div>
            </header>



        </>
    )
}
export default Navbar;