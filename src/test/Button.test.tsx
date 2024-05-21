import { render, screen } from "@testing-library/react";
import { expect, describe } from 'vitest';
import userEvent from "@testing-library/user-event";
import { Button } from "../components/Button.tsx"

import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('render text', () => {
    render(<Button text="lorem" />);
    expect(screen.getByRole('button').textContent).toMatch(/lorem/i);
  });

  it('executes a function', async () => {
    const cb = (e: Event) => {
      e.target.classList.add("clicked");
    }

    let user = userEvent.setup()

    render(<Button text="lorem" onClick={cb} />)
    const Btn = screen.getByRole("button");
    await user.click(Btn);

    expect(Btn.classList.contains("clicked")).toBe(true);
  });
});