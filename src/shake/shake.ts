interface shakeOptions {
  ids?: string[];
  speed?: number;
}

export function shake({ ids = [], speed = 5 }: shakeOptions = {}): void {
  const clampedSpeed = Math.max(1, Math.min(speed, 10));
  const interval = 300 / clampedSpeed; // Faster shake for higher speeds

  const elements =
    ids.length > 0
      ? ids.map((id) => document.getElementById(id)).filter(Boolean)
      : [document.body];

  let frame = 0;

  setInterval(() => {
    requestAnimationFrame(() => {
      frame += 1;
      const shakeX = Math.sin(frame * 0.6) * 7;
      const shakeY = Math.cos(frame * 0.6) * 7;

      elements.forEach((el) => {
        if (el) {
          el.style.transform = `translate(${shakeX}px, ${shakeY}px)`;
        }
      });
    });
  }, interval);
}
