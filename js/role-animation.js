const positionElement = document.querySelector(".me__position");
const positions = ["Fullstack Developer", "Frontend Developer"];
let currentPositionIndex = 0;

positionElement.addEventListener("animationiteration", () => {
  currentPositionIndex = (currentPositionIndex + 1) % positions.length;
  positionElement.textContent = positions[currentPositionIndex];
});
