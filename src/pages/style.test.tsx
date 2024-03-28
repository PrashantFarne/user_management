import "@testing-library/jest-dom/extend-expect";
import "./style.css";

describe("CSS styles", () => {
  test("bg-custom class has correct styles", () => {
    const element = document.createElement("div");
    console.log(element, "element");
    element.classList.add("bg-custom");
    document.body.appendChild(element);

    const computedStyles = window.getComputedStyle(element);

    expect(computedStyles.border).toBe("2px solid rgb(237, 230, 230)");
    expect(computedStyles.padding).toBe("60px");
    expect(computedStyles.borderRadius).toBe("40px");
  });

  test("custom-width class has correct styles", () => {
    const element = document.createElement("div");
    element.classList.add("custom-width");
    document.body.appendChild(element);

    const computedStyles = window.getComputedStyle(element);

    expect(computedStyles.width).toBe("250px");
    expect(computedStyles.fontSize).toBe("14px");
    expect(computedStyles.color).toBe("rgb(51, 51, 51)");
  });
});
