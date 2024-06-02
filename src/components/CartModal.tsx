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
    const {cartProducts, removeFromCart} = useContext(CartProductsContext);
    const [totalPrice, setTotalPrice] = useState(getTotalPrice(cartProducts));

    const handleCheckout = (e) => {
        
    }
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Cart</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                
                <div className="lineProducts space-y-16 h-96 overflow-y-scroll bg-slate-200 p-4">
                    {
                      cartProducts.map((x) => <LineCard deleteMethod={removeFromCart} key={x.id} {...x} />)
                    }
                </div>

                <span className="text-primary">Total: {
                   totalPrice

                }</span>
                <div className="modal-action">
                <div className="">
                    <Button text={"Checkout"} className="btn-primary" onClick={handleCheckout} />
                </div>
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    )
}