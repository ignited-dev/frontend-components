const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    panels.forEach((panel) => panel.classList.remove("active"));
    console.log(e.target.classList.add("active"));
  });
});
