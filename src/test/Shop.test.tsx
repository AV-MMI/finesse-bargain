import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { Shop } from "../components/Shop.tsx";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

describe("Shop Component", () => {
  it("Render nav menu", () => {
    render(<Shop />, {wrapper: BrowserRouter});
    expect(screen.getByTestId("navMenu")).toBeInTheDocument();
  })

  it("Render item's display", () => {
    render(<Shop />, {wrapper: BrowserRouter});
    expect(screen.getByTestId("productsDisplay")).toBeInTheDocument();
  })

})