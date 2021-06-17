let evt = document.querySelector(".share-btn")
evt.addEventListener("click", f);

function f(e){
    e.currentTarget.previousElementSibling.classList.toggle("show");
}
