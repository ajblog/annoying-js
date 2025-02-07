import { disappearText, randomShake } from "./dist/index.mjs";

document.getElementById("disappearTextBtn").addEventListener("click", () => {
  disappearText();
  alert("Disappear Text Activated! Hover over text to see it vanish.");
});

document.getElementById("randomShakeBtn").addEventListener("click", () => {
  randomShake();
  alert("Random Shake Activated! The page will start shaking.");
});
