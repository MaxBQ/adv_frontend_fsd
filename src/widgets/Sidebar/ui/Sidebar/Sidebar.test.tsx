import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("click sidebar", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-btn");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
