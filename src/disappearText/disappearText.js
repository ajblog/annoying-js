export function disappearText() {
  document.addEventListener("mouseover", (event) => {
    if (
      event.target.nodeType === Node.TEXT_NODE ||
      event.target.childNodes.length === 0
    ) {
      event.target.style.visibility = "hidden";
    }
  });
}
