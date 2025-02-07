import { randomShake } from "../src/randomShake";
import { JSDOM } from "jsdom";

test("randomShake modifies body transform", (done) => {
  const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
  global.document = dom.window.document;

  randomShake();

  setTimeout(() => {
    expect(document.body.style.transform).toMatch(
      /translate\(-?\d+px, -?\d+px\)/
    );
    done();
  }, 150);
});
