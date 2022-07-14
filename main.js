let cerrar = document.querySelector(".close");
let abrir = document.querySelector(".learning-form");
let modal = document.querySelector(".modal");
let modalC = document.querySelector(".modal-container");
let boxInterfaceModal = document.getElementById("box-interface-modal");
let error = document.getElementById("error");
let enviarForm = document.getElementById("enviarFormulario");

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 600);
  }
});

enviarForm.addEventListener("click", function (e) {
  if (boxInterfaceModal == null || boxInterfaceModal.value == "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
  return false;
});
/* handel submit image */
const inputImageFiles = document.getElementById("icono-addPic");
let files = [];
inputImageFiles.addEventListener("change", function (e) {
  if (files.length > 2) {
    window.alert('solo ingrese 3 imagenes como maximo')
    return;
  }
  else{
    renderImages
  }
  files.push(...e.currentTarget.files);
  renderImages();
});
function renderImages() {
  let imgHTML = "";
  var outputImage = document.getElementById("output");
  files.slice(0, 3).forEach((file, index) => {
    console.log(outputImage);
    let urlDinamic = URL.createObjectURL(file);
    imgHTML += `
            <div class="content-pics-prev">
                <img src="${urlDinamic}" class="formato-fotos" />   
                <button class="button-delete-prev" onclick="deleteImage(${index})">DELETE</button>
            </div>`;
  });
  outputImage.innerHTML = imgHTML;
}
/* delete pics prev with button*/
function deleteImage(id) {
  files = files.filter((Element, index) => {
    return index != id;
  });

  renderImages();
}
/* add the location */
const addLocation = document.getElementById("icon-loc");
addLocation.addEventListener("click", function(e){
  e.preventDefault();
  addLocation.style.flex = "visibility";  
})
