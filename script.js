document.addEventListener("DOMContentLoaded", () => {
  const centerB = document.getElementById("centerBubble");
  const rightB = document.getElementById("rightBubble");
  const leftB = document.getElementById("leftBubble");
  const topB = document.getElementById("topBubble");
  const bottomB = document.getElementById("bottomBubble");

  centerB.addEventListener("click", () => {
    rightB.classList.toggle("rightOut");
    leftB.classList.toggle("leftOut");
    topB.classList.toggle("topOut");
    bottomB.classList.toggle("bottomOut");
  });
});
