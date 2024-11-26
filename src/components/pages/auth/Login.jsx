import * as React from 'react';
import { Link, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

import { userLogin } from './userApi.js';
import { addEmailPassToCookie, getCookie } from './cookieAction.js';

import { url as urlPath } from '../../partials/data.js';
import sendEmail from '../emailjs/email.js';
import { Link as routerLink } from 'react-router-dom';
import { isValidEmail } from './regularExp.js';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
};
const FormStyle = styled("form")(({ theme }) => ({
    "i": { marginRight: "10px" }
}))

let cookieEmail = getCookie("email");
let cookiePass = getCookie("password");


let options = {
    to: "govindlohar3210@gmail.com",
    subject: "Welcome to reset your password",
    msg: `<p>Please click on the link to reset you password link: ${urlPath}/forget-password</p>`
}
const Component=styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        width:340
    }
}))
export default function Login() {

    let navigate = useNavigate();
    const [checkMe, setCheckMe] = useState(false);
    const [result, setResult] = useState({ type: false, msg: "" });
    const [user_data, setUser_data] = useState({
        email: (cookieEmail == null) ? "" : cookieEmail, password: (cookiePass == null) ? "" : cookiePass
    });

    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
    }
    const loginHandle = () => {
        if (checkMe == true) {
            addEmailPassToCookie(user_data.email, user_data.password);
        }
        if (isValidEmail(user_data.email) == false) {
            setResult({ type: true, msg: "Email Type is Invalid..." });
            return;
        }
        userLogin({ ...user_data }, setResult);
    }
    const sendEmailHandle = () => {
        if (user_data.email == "") {
            setResult({ type: true, msg: "Please Fill This Field...." });

        }
        else if (isValidEmail(user_data.email) == false) {
            setResult({ type: true, msg: "Enter Valid Email Type...." });
        }
        else {
            //send email to user
            options.to = user_data.email;
            window.localStorage.setItem("email", user_data.email);
            sendEmail(options);
            setResult({ type: true, msg: "Check your email..." })




        }
        setTimeout(() => setResult({ type: false, msg: "" }), 5000)
    }

    return (
        <div className="border-none">



           


                <Component sx={style} className="p-4">
                    {(result.type == true) ? <div className="alert alert-primary" role="alert">
                        {result.msg}
                    </div> : ""}
                    <Typography variant='h5' className="text-center text-bold">LOGIN</Typography>
                    <FormStyle>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"><i className="fa-regular text-dark fa-envelope "></i> Enter Email </label>
                            <input type="email" value={user_data.email} onChange={handleInput} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Password</label>
                            <input type="password" value={user_data.password} onChange={handleInput} name="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" onClick={(e) => setCheckMe(checkMe ? false : true)} className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>

                        <Link to="/forget-password" component={routerLink} className="d-block" style={{ textDecoration: "underline" }}>ForgetPassword</Link>
                        {/* <Button onClick={() => loginWithRedirect()} className=" text-center mx-auto my-2 mx-auto d-block bg-danger" variant='contained'>Login With Redirect</Button> */}
                        <Button variant='contained' onClick={loginHandle} className="mt-3 mx-auto d-block text-bold w-50">Sign Up</Button>
                        <Box className="my-2"> <span>Create new account :-</span> <Link to="/signup" component={routerLink} className="" style={{ textDecoration: "underline" }}>Register</Link>
                        </Box>
                    </FormStyle>
                </Component>




            


        </div>
    );
}