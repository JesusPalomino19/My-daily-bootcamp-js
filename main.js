 let cerrar = document.querySelector(".close")
 let abrir = document.querySelector(".learning-form")
 let modal = document.querySelector(".modal")
 let modalC = document.querySelector(".modal-container")


 abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
 });

 cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },600)
 })

 window.addEventListener("click",function(e){
    if(e.target == modalC){
        modal.classList.toggle('modal-close');
        
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },600)
    }
 })

 
let menus = document.querySelectorAll(".popup-container .public-button");
let content = document.querySelectorAll(".popup-container .popup");
let closeContent=document.querySelectorAll(".popup .public-delete");
let contentTotal=document.querySelectorAll(".content-total");
let closeWindow=document.querySelectorAll(".cmd-close-icon")
let buttonClose=document.querySelectorAll(".cmd-close")

menus.forEach((element,index) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        if(content[index].classList.contains("block")==false){
            content[index].classList.add("block");
        }else{
            content[index].classList.remove("block");
        }
    })
 });

 closeContent.forEach((element,index) => {
    element.addEventListener("click", function (e){
        e.preventDefault();
        if(contentTotal[index].classList.contains("show")==false){

            contentTotal[index].classList.add("show")
        }
    })
 });

 closeWindow.forEach((element,index) => {
    element.addEventListener("click", function (e){
        e.preventDefault();
        if(contentTotal[index].classList.contains("show")==true){

            contentTotal[index].classList.remove("show")
        }
    })
 });

 buttonClose.forEach((element,index) => {
    element.addEventListener("click", function (e){
        e.preventDefault();
        if(contentTotal[index].classList.contains("show")==true){

            contentTotal[index].classList.remove("show")
        }
    })
 });
 