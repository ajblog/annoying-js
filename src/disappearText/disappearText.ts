export function disappearText(): void {
  document.addEventListener("mouseover", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target) return;
    target.style.visibility = "hidden";
  });
}
