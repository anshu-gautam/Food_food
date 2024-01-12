import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("test wheather contact us component load or not", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("wheather button is loading or not", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");

  // assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");

  // assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");

  //console.log(inputBoxes.length);

  // assertion
  expect(inputBoxes.length).toBe(2);
});
