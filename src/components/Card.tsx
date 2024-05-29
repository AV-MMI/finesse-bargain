import React, { useState } from 'react'
import { Button } from "./Button"
export { Card }

function Card({cb, id, img, title="shoes", price=100, quantity=1, className=""}){
    const [quant, setQuant] = useState(quantity);

    const incrementQuant = (e) => {
            setQuant(quant + 1);
            return;
    }

    const decrementQuant = (e) => {
        if(quant > 1){
            setQuant(quant - 1);
            return;
        }
    }

    const addToCart = (e) => {
        let unique = true;
        const productCard = {
            id: id,
            title: title,
            img: img,
            price: price,
            quantity: quant,
            total: (price * quant),
        }

        for(let i = 0; i < cb.cartProducts.length; i++){
            if(cb.cartProducts[i]['id'] == productCard.id){
                unique = false;
            }
        }

        if(unique){
            let newArr = cb.cartProducts.slice();
            newArr.push(productCard);
            cb.setCartProducts(newArr);
        }
    }


    return(
        <div id={id} className={"card card-compact w-60 h-fit bg-base-100 shadow-xl" + className}>
            <img src={img} alt={`${title} image`} />
              <div className="card-body flex flex-col items-center">
                    <div className="flex items-center justify-around gap-4">
                        <h2 className="card-title justify-center">{title}</h2>
                        <span data-testid="priceDisplay" className="text-primary font-semibold">price: {price * quant}$</span>
                    </div>
                    <div className="card-actions flex flex-row items-center justify-end">
                        <div className="flex items-center space-x-2">
                            <Button text="-" className="text-primary size-4 hover:border-primary hover:bg-slate-300" onClick={decrementQuant}/>
                            <span data-testid="quantityDisplay" className="text-primary font-semibold">{quant}</span>
                            <Button text="+" className="text-primary size-4 hover:border-primary hover:bg-slate-300" onClick={incrementQuant}/>
                        </div>
                        <Button onClick={addToCart} className=" btn-primary text-white w-20" text="Add to Cart" />
                    </div>
              </div>
        </div>
    )
}