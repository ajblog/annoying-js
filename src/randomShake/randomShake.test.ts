import { randomShake } from "./randomShake";

test("randomShake modifies body transform", (done) => {
  document.body.innerHTML = "<body></body>"; // Reset body for each test

  randomShake();

  setTimeout(() => {
    expect(document.body.style.transform).toMatch(
      /translate\(-?\d+(\.\d+)?px, -?\d+(\.\d+)?px\)/
    );
    done();
  }, 150);
});
