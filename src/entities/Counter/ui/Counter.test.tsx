import { ComponentRender } from "shared/lib/tests/ComponentRender";
import { Counter } from "./Counter";
import { fireEvent, screen } from "@testing-library/react";

describe("Counter", () => {
  const ComponentCounter = () =>
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

  test("test render", () => {
    ComponentCounter();
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });
  test("increment", () => {
    ComponentCounter();
    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });
  test("decrement", () => {
    ComponentCounter();
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
