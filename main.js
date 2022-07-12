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