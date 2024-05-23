import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { About } from "../components/About.tsx";
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

describe("About Component", () => {
    it("renders content", ()=>{
        render(<About/>, {wrapper: BrowserRouter});

        expect(Boolean(screen.queryAllByText(/Finesse Bargain/i))).toBe(true);
    })
});
