import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../partials/header";
import ProfileDash from "./UserProfile/ProfileDash";
import Register from "./auth/register.js";
import Login from "./auth/login";
import { getToken } from "./auth/tokenAction.js";
import Footer from "../partials/Footer";
function Layout(){
    
  
 
    return (<>
        <Header/>
        <Outlet/>
        
        <Footer/>
       
    </>)
}
export default Layout;