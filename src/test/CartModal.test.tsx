import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { CartModal } from "../components/CartModal";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe("CartModal Component", () => {
    it("render CartModal", () => {
        render(
            <CartModal />
        )

        expect(screen.getByText(/cart/i)).toBeInTheDocument();
    })

    it("render products container", () => {
        render(
            <CartModal />
        )

        expect(screen.getByText(/Products/i)).toBeInTheDocument();
    })

    it("render total price", () => {
        render(
            <CartModal />
        )

        expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    })

    it("render checkout btn", () => {
        render(
            <CartModal />
        )

        expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
    })
})