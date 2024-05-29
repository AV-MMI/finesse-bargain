import { Button } from "./Button"
export { CartModal }

function CartModal({}){
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Cart</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                
                <div className="lineProducts">
                    /**Working */
                </div>

                <span className="text-primary">Total: {"100€"}</span>
                <div className="modal-action">
                <div className="">
                    <Button text={"Checkout"} className="btn-primary"/>
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