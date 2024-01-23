const prevBtn = document.querySelector("#pre");
const nextBtn = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector("#progress");

let currentActive = 1;

prevBtn.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

nextBtn.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");

  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive == 1) {
    prevBtn.disabled = true;
  } else if (currentActive == circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
