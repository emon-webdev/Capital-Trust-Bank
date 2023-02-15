import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button/Button";

afterEach(() => {
  cleanup();
});

test("Heading Test", () => {
  render(<Button></Button>);
  const buttonElem = screen.getByRole("button");
  expect(buttonElem).toBeInTheDocument();
});
