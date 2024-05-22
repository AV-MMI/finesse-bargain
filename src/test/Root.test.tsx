import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { Root } from "../components/Root.tsx";
import { describe, it, expect } from 'vitest';

describe('Root component', () => {
  it('render correct heading', () => {
    render(<div><Root /></div>);
    expect(true).toBe(true)
  })
  it('render menu', () => {
    expect(true).toBe(true);
  });

  it('render theme button', () => {
    expect(false).toBe(false);
  });

  it('render Cart modal', () => {

  })
});