import React, { useState, useEffect } from "react";
import "../../css/auth.css";
import { useUserRegisterMutation } from "../../../features/api/apiSlice";
import { setToken } from "./tokenAction";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const [user, setUser] = useState({
        user: "", email: "", password: "", mob: "",
    })
    const navigate = useNavigate();
    const [isError, setError] = useState({ msg: "", type: "", success: false });

    const [signUp, responseInfo] = useUserRegisterMutation();

    const inputHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // for (let data in user) {
        //     if (user[data] == "") {
        //         setError({msg:"Please Fill All Field...!",success:true});
        //         return ;
        //     }
        // }
        const newUser = new FormData();
        for (let data in user) {
            newUser.append(data + "", user[data]);
        }
        const result = await signUp(user);
        if (result.data.status)
          {  setToken(result.data.token);navigate("/")}
       
        setError({ msg: result.data.msg, success: true });
    }
    return (
        <>
            <div className="auth-div">
                <div className="modal-div bg-secondary  " id="register">
                    <h2 className="text-white font-weight-bold text-center ">REGISTER</h2>
                    <form action="" className="register-form">
                        <div className="field-group">
                            <label htmlFor="name">Name :-</label>
                            <input type="text" name="user" value={user.name} onChange={inputHandle} placeholder="Enter User Name..." />
                        </div>
                        <div className="field-group">

                            <label htmlFor="email">Email :-</label>
                            <input type="text" name="email" value={user.email} onChange={inputHandle} placeholder="Enter User Email..." />
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Password :-</label>
                            <input type="text" value={user.password} onChange={inputHandle} placeholder="Enter User Password..." name="password" />
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Phone :-</label>
                            <input type="text" value={user.mob} onChange={inputHandle} placeholder="Enter User Phone No. ..." name="mob" />
                        </div>

                        <div>
                            <button className="btn btn-primary signup font-weight-bold mx-auto d-block" onClick={handleSubmit}>Register</button>
                            <NavLink to="/" className="active btn btn-danger">Close</NavLink>
                        </div>
                        <small className="mb-3">Already Have An Account :- <NavLink to="/login" className="active ">Login</NavLink></small> 
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