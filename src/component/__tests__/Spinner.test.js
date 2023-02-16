import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "../Spinner/Spinner";

afterEach(() => {
  cleanup();
});

test("Role Test", () => {
  render(<Spinner></Spinner>);
  const textElem = screen.getByTestId("div");
  expect(textElem).toBeInTheDocument();
});
