////////Background Imge//////////


// let slider=document.querySelector(".slider-div");
var pages = "";
var slides ="";
var idx=0;

const bgLoaded=()=>{


    pages = document.querySelectorAll(".paginate > li");
    slides = document.querySelectorAll(".slide");
    
    slides[0].style.left="0";
    function sliderChange(e) {
      
        let btnName=e.target.getAttribute("id");
       
        if(btnName=="prev" ){
            if(idx>0){
                slides[idx--].style.left="-200%";
                slides[idx].style.left="0%";
            }
        }
        else if(btnName=="next" ){
            if(idx<slides.length-1){
                
                slides[idx++].style.left="200%";
                slides[idx].style.left="0%";
            }
        }
        else{
            if(btnName-1>idx){
                slides[idx].style.left="200%";
                slides[btnName-1].style.left="0%";
            }
            else if(btnName-1<idx){
                slides[idx].style.left="-200%";
                slides[btnName-1].style.left="0%";
                
            }
            idx=btnName-1;
        }
        
          
    }




    pages.forEach((page) => {
        page.addEventListener("click", sliderChange,true);
    })





// authentication/
}

export {bgLoaded}