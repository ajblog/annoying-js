export function disappearText(): void {
  document.addEventListener("mouseover", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target) return;

    // Get all child text nodes
    target.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        (node as Text).textContent = ""; // Hide only the text content
      }
    });
  });
}
