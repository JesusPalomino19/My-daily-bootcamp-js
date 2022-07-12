let menus = document.querySelectorAll(".popup-container .public-button");
let content = document.querySelectorAll(".popup-container .popup");


menus.forEach((element,index) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        content[index].style.opacity = "1";
        content[index].style.display = "block";
     });
});
