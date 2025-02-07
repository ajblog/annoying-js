import { disappearText } from "./disappearText";

test("disappearText should add event listener", () => {
  document.body.innerHTML = '<p id="text">Hello</p>';
  const textElement = document.getElementById("text") as HTMLElement;

  disappearText();

  const event = new MouseEvent("mouseover", { bubbles: true });
  textElement.dispatchEvent(event);

  expect(textElement.style.visibility).toBe("hidden");
});
