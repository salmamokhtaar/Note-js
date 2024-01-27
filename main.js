const button = document.querySelector("#button")
const model = document.querySelector("#model")
const close = document.querySelector("#closeBtn")

const noteparent = document.querySelector("#noteparent")
const save = document.querySelector("#savebtn")
const title = document.querySelector("#title")
const desc = document.querySelector("#description")

// show model
button.addEventListener("click", function(e) {
    model.style.display = "block"

})
// hide model
closeBtn.addEventListener("click", function(e) {
    model.style.display = "none"


})



save.addEventListener("click", function(){
    
    if(title.value != "" && desc.value != ""){
        const newDev = document.createElement("div")
        newDev.innerHTML = title.value + "<br>" +desc.value
        noteparent.appendChild(newDev)
        newDev.style.backgroundColor = "purple"
        newDev.style.padding = "15px"
        newDev.style.color = "white"
        model.style.display = "none"
        title.value = " "
        desc.value = " "




    }
    

})
