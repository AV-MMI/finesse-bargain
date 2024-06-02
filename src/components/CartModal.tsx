import { Button } from "./Button";
import { useContext, useState } from "react";
import { LineCard } from "./LineCard";
import { CartProductsContext } from "./Root";
export { CartModal }

const getTotalPrice = (cartP) => {
    let acc = 0;
    for(let i = 0; i < cartP.length; i++){
        acc += (cartP[i].price * cartP[i].quantity);
    }

    return acc;
}
function CartModal({}){
    const {cartProducts, removeFromCart, editProductInCart} = useContext(CartProductsContext);
    const totalPrice = getTotalPrice(cartProducts).toFixed(2);

    const handleCheckout = (e) => {
        
    }
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Cart</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                
                <div className="lineProducts h-96 bg-slate-200 flex items-center">
                    <div className="p-4 h-[360px] overflow-y-scroll">
                        <span className="text-slate-400">Products</span>
                        {
                            (cartProducts.length == 0 && <h2 className="text-amber-500 text-xl text-center">The Cart is empty...!</h2>)
                        }
                        {
                            <div className="space-y-16 m-4">
                                {
                                cartProducts.map((x) => <LineCard deleteMethod={removeFromCart} editMethod={editProductInCart} key={x.id} {...x} />)
                                }
                            </div>
                        }
                    </div>
                </div>

                <span className="text-primary">Total: {totalPrice}$
                   </span>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <div className="space-x-4">
                        <Button className="btn-primary" text="Checkout"/>
                        <Button className="btn" text="Close" />
                    </div>
                </form>
                </div>
            </div>
        </dialog>
    )
}