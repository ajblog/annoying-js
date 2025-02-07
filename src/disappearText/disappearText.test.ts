import { disappearText } from "./disappearText";

test("disappearText should remove only the inner text", () => {
  document.body.innerHTML = '<p id="text">Hello <span>World</span></p>';
  const textElement = document.getElementById("text") as HTMLElement;

  disappearText();

  const event = new MouseEvent("mouseover", { bubbles: true });
  textElement.dispatchEvent(event);

  expect(textElement.childNodes[0].textContent).toBe(""); // "Hello " should be removed
  expect(textElement.querySelector("span")?.textContent).toBe("World"); // Inner span should remain
});
