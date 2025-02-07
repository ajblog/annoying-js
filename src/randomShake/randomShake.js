export function randomShake() {
  setInterval(() => {
    document.body.style.transform = `translate(${Math.random() * 10 - 5}px, ${
      Math.random() * 10 - 5
    }px)`;
  }, 100);
}
