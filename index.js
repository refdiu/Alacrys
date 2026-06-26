const dropdown = document.getElementById("dropdown");
const topbar = document.getElementById("topbar");

dropdown.addEventListener("click", function() {
    topbar.classList.toggle("open");
});