import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../partials/Header";


import Footer from "../partials/Footer";
function Layout(){
    
  
 
    return (<>
        <Header/>
        <Outlet/>
        
        <Footer/>
       
    </>)
}
export default Layout;