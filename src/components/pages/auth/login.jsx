import React, { useState, useEffect } from "react";
import "../../css/auth.css";
import { useDispatch } from "react-redux";
import { setToken, getToken } from "./tokenAction";
import { useGetUserQuery, useUserLoginMutation } from "../../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [isError, setError] = useState({ msg: "", type: "", success: false });
    const [login, responseInfo] = useUserLoginMutation();
    const navigate = useNavigate();





    // -------------Handles----------------//
    const inputHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let data in user) {
            if (user[data] == "") {
                setError({ msg: "Please Fill All Field...!", success: true });
                return;
            }
        }
        const newUser = new FormData();
        for (let data in user) {
            newUser.append(data + "", user[data]);
        }
        const token = getToken();
        const actualData = { ...user, token };

        const result = await login(actualData);

        // store token
        if (result.data.status) {
            setToken(result.data.token);
            localStorage.setItem("user", user.email);

            navigate("/");
        }
        //set result
        setError({ msg: result.data.msg, success: true });
        // document.querySelector("#login").reset();
        


    }


    //Component render
    return (
        <>
          <div className="auth-div">
            <div className="modal-div bg-secondary  " id="login">
                <h2 className="text-white font-weight-bold text-center ">LOGIN</h2>
                <form action="" className="login-form">

                    <div className="field-group">
                        <label htmlFor="email">Email :-</label>
                        <input type="email" name="email" value={user.email} onChange={inputHandle} placeholder="Enter User Email..." />
                    </div>
                    <div className="field-group">
                        <label htmlFor="password">Password :-</label>
                        <input type="text" value={user.password} onChange={inputHandle} name="password" placeholder="Enter User Password..." />
                    </div>

                    <div>
                        <button className="btn btn-primary signup font-weight-bold mx-auto d-block" onClick={handleSubmit}>Login</button>
                        <NavLink to="/" className="active btn btn-danger">Close</NavLink>
                    </div>
                   
                    {
                        (isError.success) ? <div className="alert alert-dark  ">{isError.msg}</div> :
                            ""
                    }
                </form>
            </div>
            </div>
        </>
    )
}