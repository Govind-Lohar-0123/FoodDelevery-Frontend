import React from "react";
import Background from "./Background";
import FoodSection from "./FoodSection";



function Container(){
  
    return (<>
        <div className="main p-0 m-0 width-100">
          <Background/>
          <FoodSection/>
          
          
        </div>

    </>)
}
export default Container;