var pop=document.getElementById("popover")
var pob=document.getElementById("popbox")
var butt=document.getElementById("popup")

function ps(){

    pop.style.display="block";
    pob.style.display="block";

}
var canbut=document.getElementById("canb")

canbut.addEventListener("click",function(event){

event.preventDefault()
    pop.style.display="none";
    pob.style.display="none";

})

var contain=document.querySelector(".container")
var book=document.getElementById("book") 
var author=document.getElementById("auth") 
var tarea=document.getElementById("text") 
var addbutton=document.getElementById("addb")

addbutton.addEventListener("click",function(event){
event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bcon")
    div.innerHTML=`<h2>${book.value}</h2>
            <h5>${author.value}</h5>
            <p>${tarea.value}</p>
            <button onclick="del(event)" class="btn">Delete</button>`
    contain.append(div)
    pop.style.display="none";
    pob.style.display="none";
})

function del(event){
    event.target.parentElement.remove()
}


