let equal = document.querySelector(".equal")
let display = document.querySelector(".display")
let input = document.querySelector(".input")
console.log(equal)
console.log(display)
console.log(input)
equal.addEventListener("click",()=>{
    display.value=eval(display.value)
    display.scrollLeft=0;
    display.scrollTop=0;

    
    
})