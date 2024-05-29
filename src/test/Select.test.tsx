import { render, screen } from "@testing-library/react";
import { expect, describe } from 'vitest';
import { Select } from "../components/Select.tsx";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe("Select Component", () => {
    const optsArr = [
                        <option selected>4</option>,
                        <option >8</option>,
                        <option >12</option>,
                        <option >16</option>
                    ];
    it("render component", () => {
        render( <Select optionsArr={optsArr} /> )
        expect(screen.getByText(1)).toMatch(1)
    })
})