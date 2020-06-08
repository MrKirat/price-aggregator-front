import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ProductCard from "./index";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with all props", () => {
  act(() => {
    render(
      <ProductCard
        price={'10 000'}
        description={'description'}
        openUrl={'open-url'}
        productImage={'product-image-url'}
        productName={'title'}
        shopLogo={'shop-logo-url'}
      />,
      container
    );
  });

  expect(container).toHaveTextContent('description');
  expect(container).toHaveTextContent('10 000');
});