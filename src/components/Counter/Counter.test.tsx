import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from ".";

describe("Counter", () => {
  it("should render 'The counter is 0'", () => {
    render(<Counter />);
    expect(screen.getByText("The counter is 0")).toBeDefined();
  });

  it("should increment the counter when the button is clicked", () => {
    render(<Counter />);
    const button = screen.getByText("Increment");

    fireEvent.click(button);
    expect(screen.getByText("The counter is 1")).toBeDefined();
  });
});
