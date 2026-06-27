const dropdown = document.getElementById("dropdown");
const topbar = document.getElementById("topbar");
const arrow = document.getElementById("ima")

dropdown.addEventListener("click", function() {
    topbar.classList.toggle("open");
});

window.onclick = function(event){
    if(event.target == arrow){
        arrow.style.transform = "rotate(180deg)";
    }
}