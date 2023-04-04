const panels = document.querySelectorAll(".panel");

//console.log(panels[0]);

// loop over panels and add event listener (click) to expand image

panels.forEach((panel) => {
    panel.addEventListener("click", () => {

        removeActiveClass();

        // add active class when click
        panel.classList.add("active")
    });
});

function removeActiveClass() {
    panels.forEach((panel) => {
        // remove active class
        panel.classList.remove("active")
    });
}