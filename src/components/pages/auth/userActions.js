

function setUser(user_email){
    localStorage.setItem("user",user_email);
    console.log("hello")
    
}
function getUser(){
    
    return localStorage.getItem("user");
}
function removeUser(){
    localStorage.removeItem("user");
}

export {setUser,getUser,removeUser};