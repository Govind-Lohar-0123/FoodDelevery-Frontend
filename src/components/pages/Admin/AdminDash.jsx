import react from "react";

export default function AdminDash(){

    return (<>
        
      <div className="profile-right col-div  bg-secondary ">
          <form action="">
            <div>
              <label htmlFor="">Email</label>
              <input type="text" value="govindlohar3210@gmail.com"readOnly />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text"  />
            </div>
            <button className='btn mb-5 btn-primary'>Submit</button>
          </form>
      
      </div>

    </>)
}