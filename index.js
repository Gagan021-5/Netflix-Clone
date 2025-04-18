const btn1 = document.querySelector(".b1");
const btn2 = document.querySelector(".b2");
const btn3 = document.querySelector(".b3");
const btn4 = document.querySelector(".b4");
const btn5 = document.querySelector(".b5");
const btn6 = document.querySelector(".b6");


let info = document.querySelectorAll(".page");
let down = document.querySelector(".foot");
 
//Eventlisteners
btn1.addEventListener('click',give);
btn2.addEventListener('click',give);
btn3.addEventListener('click',give);
btn4.addEventListener('click',give);
btn5.addEventListener('click',give);
btn6.addEventListener('click',give);


//questions boxes
function give() {
     info.forEach(ans => {
        
        if(ans!=this.nextElementSibling){
            ans.style.display ="none";
            let prevSvg = ans.previousElementSibling.querySelector("svg");
            prevSvg.style.transform = "rotate(0deg)";
           
        }
         
     });
     element = this.nextElementSibling;      
     let svg = this.querySelector("svg");  
     if (window.getComputedStyle(element).display == "none") {
          svg.style.transform = "rotate(45deg)"; 
         element.style.display = "block";
        down.style.marginTop ="12.5rem";
   

     } else {
         svg.style.transform = "rotate(0deg)"; 
         element.style.display = "none";
         down.style.marginTop ="0rem";
      
     }
    }

     

 //sidebuttons 
 const boxes = document.querySelectorAll(".things");
 const butt2 = document.querySelector("#sbtn2");
 const  butt1 = document.querySelector("#sbtn1"); 
 

 
 butt1.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.scrollBy({ left: -1250, behavior: "smooth" }); 
       
    });
   
        butt1.style.display="none";
        butt2.style.display ="block";
        
       
});



 butt2.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.scrollBy({ left: 1250, behavior: "smooth" });            
    });    
    butt2.style.display="none";
    butt1.style.display ="block";

});














