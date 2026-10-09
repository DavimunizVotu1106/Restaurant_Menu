const openAbout = document.getElementById("open-about");
const aboutModal = document.querySelector(".about-modal");
const closeAbout = document.querySelector(".close-about");
const categoryButtons = document.querySelectorAll(".menu-filters button");

openAbout.addEventListener("click", function() {
    aboutModal.style.display = "flex";
});

closeAbout.addEventListener("click", function() {

    aboutModal.classList.add("closing");

    setTimeout(function() {
        aboutModal.style.display = "none";
        aboutModal.classList.remove("closing");
    }, 300);

});

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;

        console.log("Categoria selecionada:", category);
    });
});
