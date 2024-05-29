import { render, screen } from "@testing-library/react";
import { expect, describe } from 'vitest';
import { Select } from "../components/Select.tsx";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe("Select Component", () => {

    it("render component", () => {
        render(
            <Select>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option> 
            </Select> )
        expect(screen.getByText("4").textContent).toMatch("4")
    })
})