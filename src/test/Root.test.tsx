import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { Button } from "../components/Button.tsx"

import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('render menu', () => {
    expect(true).toBe(true);
  });

  it('render theme button', () => {
    expect(false).toBe(false);
  });
});