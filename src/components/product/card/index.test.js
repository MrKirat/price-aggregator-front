import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ProductCard from "./index";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const TestProduct = () => {
  return <ProductCard
    price={'10 000'}
    description={'description'}
    openUrl={'open-url'}
    productImage={'product-image-url'}
    productName={'title'}
    shopLogo={'shop-logo-url'}
  />
}

it("renders with correct description", () => {
  act(() => {
    render(<TestProduct />, container);
  });

  expect(container).toHaveTextContent('description');
});

it("renders with correct price", () => {
  act(() => {
    render(<TestProduct />, container);
  });

  expect(container).toHaveTextContent('10 000');
});