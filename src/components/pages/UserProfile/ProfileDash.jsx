import react from "react";

import { NavLink, Outlet } from "react-router-dom";


export default function ProfileDash() {

  return (<>
    <div className="row-div " id="dashboard">
      <aside className="profile-dash  col-div  bg-secondary ">
        <div><img src={`https://source.unsplash.com/random/1?food`} alt="" className="d-block img-fluid" /></div>
        <nav className="mt-5">
          <ul>
            {/* <li><i className="fa-solid fa-user fa-2x "></i><NavLink to="/profile">Profile</NavLink></li> */}
            <li><i className="fa-solid fa-user fa-2x "></i><NavLink to="/myorder">MyOrder</NavLink></li>
            <li><i className="fa-solid fa-user fa-2x "></i><NavLink to="/mycard">MyCard</NavLink></li>
            
          </ul>
        </nav>
      </aside>
      <Outlet/>
    </div>

  </>)
}