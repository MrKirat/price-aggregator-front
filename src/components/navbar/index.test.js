import React from "react";
import { RecoilRoot } from 'recoil';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NavBar from "./index";

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

it("renders with proper app title", () => {
  act(() => {
    render(<RecoilRoot><NavBar /></RecoilRoot>, container);
  });

  expect(container).toHaveTextContent(/Price Aggregator/);;
});