import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

afterEach(() => {
  cleanup();
});

test("Text Test", () => {
  render(<SectionTitle></SectionTitle>);
  const textElem = screen.getByTestId("text");
  expect(textElem).toBeInTheDocument();
});
