console.log("Working");

let increment=document.getElementById("increment");
let decrement=document.getElementById("decrement");
let number=document.getElementById("number");

let plus=()=>{
   number.innerText= parseInt(number.innerText)+1;
}

let minus=()=>{
    number.innerText=parseInt(number.innerText)-1;
}

increment.addEventListener("click",plus)
decrement.addEventListener("click",minus)