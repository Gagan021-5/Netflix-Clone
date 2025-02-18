const btn1 = document.querySelector(".b1");
const btn2 = document.querySelector(".b2");
const btn3 = document.querySelector(".b3");
const btn4 = document.querySelector(".b4");
const btn5 = document.querySelector(".b5");
const btn6 = document.querySelector(".b6");


let info = document.querySelectorAll(".page");
let down = document.querySelector(".foot");
 


btn1.addEventListener('click',give);
btn2.addEventListener('click',give);
btn3.addEventListener('click',give);
btn4.addEventListener('click',give);
btn5.addEventListener('click',give);
btn6.addEventListener('click',give);



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

     

 

 

 const boxes = document.querySelectorAll(".things");
 const butt = document.querySelector("#sidebutton"); 

 butt.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.scrollBy({ left: 1250, behavior: "smooth" }); 
    });
});


 const createbutton=()=>{
     const butt2 = document.createElement("button"); 
     butt2.class ="button2";
    
    //  butt2.height: 7.5rem;
    //  butt2.width: 1.5rem;
    //  butt2.border-radius: 0.5rem;
    //  butt2.border: none;
    //  butt2.color rgba(255, 255, 255, 0.7);
    //  butt2. background-color: rgba(255, 255, 255, 0.1);
    //  butt2.  align-items: center;
    //  butt2. cursor: pointer;
    //  butt2.  margin-bottom: 6rem;
    //  butt2.  margin-left: -3rem;
    //  butt2.  position: absolute;
    //  butt2.  z-index: 5;
    //  butt2. left: 0; 
    

 }
    


