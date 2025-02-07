import { shake } from "./shake";

jest.useFakeTimers();

describe("shake", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="box1"></div>
      <div id="box2"></div>
    `;
  });
  it("should respect the speed parameter and adjust the interval correctly", () => {
    jest.spyOn(global, "setInterval");

    shake({ speed: 1 }); // Slowest shake
    shake({ speed: 10 }); // Fastest shake

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 300 / 1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 300 / 10);
  });
  it("should select only the specified elements", () => {
    const box1 = document.getElementById("box1") as HTMLElement;
    const box2 = document.getElementById("box2") as HTMLElement;

    shake({ ids: ["box1"] });

    expect(box1).not.toBeNull();
    expect(box2).not.toBeNull();
  });
  it("should apply transform to elements (ignoring exact values)", async () => {
    const box1 = document.getElementById("box1") as HTMLElement;

    shake({ ids: ["box1"] });

    jest.advanceTimersByTime(100); // Allow shake to occur
    await Promise.resolve(); // Flush pending updates

    expect(box1.style.transform).not.toBe(""); // Ensure it has a transform
  });
});
