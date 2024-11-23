import React from "react";
import Background from "./Background";
import FoodSection from "./FoodSection";



function Container(){
  
    return (<>
        <div className="main " style={{marginTop:"4rem"}}>
          <Background/>
          <FoodSection/>
          
          
        </div>

    </>)
}
export default Container;