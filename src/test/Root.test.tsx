import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { Root } from "../components/Root.tsx";
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

describe('Root component', () => {
  it('render correct heading', () => {
    render(<Root />, {wrapper: BrowserRouter} );
    expect(screen.getByRole("heading").textContent).toMatch(/Finesse Bargain/i)
  })

  it('render menu', () => {
    render(<Root />, {wrapper: BrowserRouter});

    const navigationLinks: HTMLElement[] = screen.getAllByRole("link");
    expect(navigationLinks.length).toBe(3);
  });

  it('render theme button', () => {
    render(<Root />, {wrapper: BrowserRouter});

    expect( screen.getByText(/(Light Theme|Dark Theme)/i).textContent ).toMatch(/(Dark theme|Light theme)/i);
  });

  it('render Cart modal', () => {

  })
});