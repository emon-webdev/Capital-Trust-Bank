import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import DonateOptionModal from "../Modal/DonateOptionModal";

afterEach(() => {
  cleanup();
});

test("Modal Test", () => {
  render(<DonateOptionModal></DonateOptionModal>);
  const modalElem = screen.getByTestId("modal");
  expect(modalElem).toBeInTheDocument();
});

// test("Button Test", () => {
//   render(<DonateOptionModal></DonateOptionModal>);
//   const buttonElem = screen.getByRole("checkbox", { checked: true });
//   expect(buttonElem).toBeInTheDocument();
// });
