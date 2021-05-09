const panels = document.querySelectorAll(".panel");

//console.log(panels);
//console.log(panels[0]);

panels.forEach((panel) => {
  // add an eventlistener to listen to the click
  panel.addEventListener("click", () => {
    removeActiveClass();

    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    // remove all active panel classes
    panel.classList.remove("active");
  });
}
