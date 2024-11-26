import * as React from 'react';
import { Link, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as routerLink } from "react-router-dom"
import { useState } from 'react';

import { getCookie } from './cookieAction.js';

import { clientUrl, url as urlPath } from '../../partials/data.js';
import sendEmail from '../emailjs/email.js';

import { isValidEmail } from './regularExp.js';
// import {useNavigator} from "react-router-dom";

const Component=styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        width:340
    }
}))

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
    msg: `<p>Please click on the link to reset you password link: ${clientUrl}/reset-password</p>`
}
export default function ForgetPassword() {







    const [result, setResult] = useState({ type: false, msg: "" });
    const [user_data, setUser_data] = useState({
        email: (cookieEmail == null) ? "" : cookieEmail, password: (cookiePass == null) ? "" : cookiePass
    });

    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
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
                    <Typography variant='h5' className="text-center text-bold">Forget Password</Typography>
                    <form className="my-4">

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Enter Email </label>
                            <input type="email" name="email" value={user_data.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>


                        <Box className="d-flex gap-2">

                            <Link to="/login" className='d-block w-100' component={routerLink}><Button variant='contained' className="mt-3  bg-danger  text-bold w-50">Cancel</Button></Link>

                            <Button variant='contained' onClick={sendEmailHandle} className="mt-3  btn-primary text-bold w-50">Submit</Button>
                        </Box>
                    </form>
                </Component>



            


        </div>
    );
}