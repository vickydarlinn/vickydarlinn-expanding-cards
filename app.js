const panels = document.querySelectorAll(".panel");
console.log(panels);
for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", function () {
    removeActiveClass();
    panels[i].classList.add("active");
  });
}
function removeActiveClass() {
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active");
  }
}
