import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoModal from "../Modal/VideoModal";

afterEach(() => {
  cleanup();
});

test("Modal Test", () => {
  render(<VideoModal></VideoModal>);
  const videomodalElem = screen.getByTestId("videomodal");
  expect(videomodalElem).toBeInTheDocument();
});
