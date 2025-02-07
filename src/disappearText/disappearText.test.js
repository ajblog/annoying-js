import { disappearText } from "../src/disappearText";
import { JSDOM } from "jsdom";

test("text disappears on hover", () => {
  const dom = new JSDOM(`<p id="test">Hello</p>`);
  global.document = dom.window.document;

  disappearText();

  const textNode = document.getElementById("test");
  const event = new dom.window.MouseEvent("mouseover");
  textNode.dispatchEvent(event);

  expect(textNode.style.visibility).toBe("hidden");
});
