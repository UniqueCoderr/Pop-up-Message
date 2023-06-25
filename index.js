const containerEl = document.querySelector(".container")

const btn = document.querySelector(".btn")
const popupEl= document.querySelector(".popup")
const clse = document.querySelector(".close")


btn.addEventListener("click",()=>{
    containerEl.classList.add("active")
    popupEl.classList.remove("active")

})

clse.addEventListener("click",()=>{
    containerEl.classList.remove("active")
    popupEl.classList.add("active")

})