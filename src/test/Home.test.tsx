import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

import { Home } from "../components/Home.tsx";

describe("Home Component", () => {
    it("render navigational categories", () => {
        render(<Home />, {wrapper: BrowserRouter })
        
        const navLinks = screen.getAllByRole("link");
        expect(navLinks.length).toBe(4);
    })
});