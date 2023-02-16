import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../Loader/Loader";

afterEach(() => {
  cleanup();
});

test("Text Test", () => {
  render(<Loader></Loader>);
  const textElem = screen.getByTestId("text");
  expect(textElem).toBeInTheDocument();
});
