import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/ResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant menu components", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordHeader = screen.getByText("Honest Bowls (16)");

  fireEvent.click(accordHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);
});

// 2nd case

it("should load restaurant menu from accordian header", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordHeader = screen.getByText("Honest Bowls (16)");

  fireEvent.click(accordHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);
});

// 3rd case

it("should add items into cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordHeader = screen.getByText("Honest Bowls (16)");

  fireEvent.click(accordHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)"));

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (2 items)"));

  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItems").length).toBe(16);
});
