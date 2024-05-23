import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { ErrorPage } from "../components/ErrorPage.tsx";
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

describe("ErrorPage Component", () => {
    it("render error message", () => {
        render(<ErrorPage /> , {wrapper: BrowserRouter});

        expect(screen.getAllByText(/Oops/i).length).toBeGreaterThan(1);
    })

    it("render Link to Home", () => {
        render(<ErrorPage /> , {wrapper: BrowserRouter});

        expect(screen.getByRole("link")).toBeDefined();
    })

});