import { render, screen } from "@testing-library/react";
import { expect, afterEach, describe } from 'vitest';
import { LineCard } from "../components/LineCard.tsx";
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { CartProductsContext } from "../components/Root.tsx";

describe("LineCard Component", ()=>{

    const mockProduct = {
        id: 0,
        title: "Ya no sale el sol",
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        price: 100,
        quantity: 1,
    }

    it("render LineCard component", ()=>{
        render(<LineCard {...mockProduct}/>);

        expect(screen.getByText(/title:/)).toBeVisible();
    })

    it("render title, price, quantity", ()=>{
        render(<LineCard {...mockProduct}/>);
        
        // title
        expect(screen.getByText(/title:/)).toBeVisible();
        // price
        expect(screen.getByText(/price:/)).toBeVisible();
        // quantity
        expect(screen.getByText(/quantity:/)).toBeVisible();
    })  

    it("changes in quantity affect the displayed price", ()=>{

        render(<LineCard {...mockProduct} quantity={3}/>);

        // modify the displayed price
        expect(screen.getByText(/price:/).textContent).toBe("price: 300$");
    })  

    it("render edit btn", ()=>{
        render(<LineCard {...mockProduct}/>);
        expect(screen.getByText(/edit/)).toBeVisible();
    })  

    it("render input when button edit is clicked", async ()=>{
        const cartProducts = [];
        const removeFromCart = () => {};

        render(
            <CartProductsContext.Provider value={{cartProducts, removeFromCart}}>
                <LineCard {...mockProduct}/>
            </ CartProductsContext.Provider>
        )

        const editBtn = screen.queryByText(/edit/i);
        const user = userEvent.setup();

        await user.click(editBtn);
        const input = screen.queryByTestId("quantityInput");

        expect(input).toBeVisible();
    })

    it("render remove button", ()=>{
        render(<LineCard {...mockProduct}/>);
        
        let removeBtn = screen.getByText(/remove/);

        expect(removeBtn).toBeVisible();
    })

})