import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { Card } from "../components/Card.tsx";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe("Card Component", () => {
    const itemData = {
        title: "Shoes",
        img: "",
        price: "100",
        quantity: 1,
    }

    it("Render Card component", ()=>{
        render(<Card title={itemData.title} img={itemData.img} price={itemData.price} quantity={itemData.quantity}/> );
        expect(screen.getByText(itemData.title)).toBeInTheDocument();

    })

    it("Render item title", ()=>{
        render(<Card title={itemData.title} img={itemData.img} price={itemData.price} quantity={itemData.quantity}/> );
        expect(screen.getByText(itemData.title).textContent).toMatch(itemData.title);
    })

    it("Render item price", ()=>{
        render(<Card title={itemData.title} img={itemData.img} price={itemData.price} quantity={itemData.quantity}/> );
        expect(screen.getByTestId("priceDisplay")).toBeVisible();
    })

    it("Render increment in quantity when '+' button is pressed", async () => {
        render(<Card title={itemData.title} img={itemData.img} price={itemData.price} quantity={itemData.quantity}/> );
        const plusBtn = screen.getByText("+");
        const quantity = screen.getByTestId("quantityDisplay");
        const user = userEvent.setup();
        await user.click(plusBtn);

        expect(quantity.textContent).toBe("2");
    })

    it("Render decrement in quantity when '-' button is pressed", async () => {
        render(<Card title={itemData.title} img={itemData.img} price={itemData.price} quantity={itemData.quantity+1}/> );
        const minusBtn = screen.getByText("-");
        const quantity = screen.getByTestId("quantityDisplay");
        const user = userEvent.setup();
        await user.click(minusBtn);

        expect(quantity.textContent).toBe("1");
    })
    
    it("Render change in price when quantity changes", async () =>{
        render(<Card title={itemData.title} img={itemData.img} price={itemData.price} quantity={itemData.quantity}/> );
        const plusBtn = screen.getByText("+");
        const user = userEvent.setup();
        await user.click(plusBtn);
        await user.click(plusBtn);

        expect(screen.getByTestId("priceDisplay").textContent).toMatch("price: 300$");
    })
})