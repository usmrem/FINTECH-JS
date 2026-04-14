const dots = document.getElementById("dots");
const frames = ["", ".", "..", "..."];
let i = 0;

setInterval(() => {
  dots.textContent = frames[i];
  i = (i + 1) % frames.length;
}, 400);

// disable copy
document.addEventListener("copy", e => e.preventDefault());

// disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// disable Ctrl+C
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key.toLowerCase() === "c") {
    e.preventDefault();
  }
});