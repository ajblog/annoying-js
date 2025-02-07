import { disappearText, shake } from "./dist/index.mjs";

document.getElementById("resetBtn").addEventListener("click", () => {
  location.reload();
});

document.getElementById("disappearTextBtn").addEventListener("click", () => {
  disappearText();
  alert("Disappear Text Activated! Hover over text to see it vanish.");
});

document.getElementById("shakeBtn").addEventListener("click", () => {
  shake();
  alert("Shake Activated! The page will start shaking.");
});
