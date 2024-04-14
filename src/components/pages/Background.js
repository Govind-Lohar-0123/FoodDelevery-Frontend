import React, { useEffect, useState } from "react";



import { useDispatch ,useSelector} from "react-redux";
import { addSearch } from "../../features/searchSlice.js";
import { bgLoaded } from "../js/script.js";

function Background(){
    const [search,setSearch]=useState("");
    const dispatch = useDispatch();
   
    function inputHandle(e){
        setSearch(e.target.value);
        dispatch(addSearch(search));
    }
    useEffect(()=>{bgLoaded()})

    return (<>
        <div className="back-ground">
            <div className="food-search ">
                <input type="text" className=" bg-dark text-white" value={search} onChange={inputHandle} placeholder="Search Food Here..."/>
                {/* <div className="search-icon rounded"><i className="fa-2x text-white fa-solid fa-magnifying-glass"></i></div> */}
            </div>
            <div className="slider-div">
                {
                    Array.from(new Array(10),(item,idx)=>{
                        return <div className="slide"><img className="w-100 d-block bg-danger"src={`https://source.unsplash.com/random/${idx}?food`}  /></div>
                        
                    })
                }
              
               
                
            </div>
            
            <div>
                <ul className="paginate">
                    <li ><a id="prev">Prev</a></li>
                    <li><a id="1">1</a></li>
                    <li><a id="2">2</a></li>
                    <li><a id="3">3</a></li>
                    <li ><a id="next">Next</a></li>
                   
                    
                </ul>
            </div>

            
        </div>

    </>)
}
export default Background;