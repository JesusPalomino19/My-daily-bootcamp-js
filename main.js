let menus = document.querySelectorAll(".popup-container .public-button");
let content = document.querySelectorAll(".popup-container .popup");


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
