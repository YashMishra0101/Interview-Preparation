let incrementButton=document.querySelector(".incrementButton")
let incrementNumber=document.querySelector(".incrementNumber")

incrementButton.addEventListener('click',()=>{
   let convertInt=parseInt(incrementNumber.textContent)
   convertInt++;
  incrementNumber.textContent=convertInt;
})