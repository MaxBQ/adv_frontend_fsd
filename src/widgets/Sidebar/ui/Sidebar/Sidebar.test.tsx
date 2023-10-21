import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ComponentRender } from "../../../../shared/lib/tests/ComponentRender";

describe("Sidebar", () => {
  test("render", () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("click sidebar", () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-btn");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
