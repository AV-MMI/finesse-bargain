import { useContext, useState } from "react";
import { Button } from "./Button";
import { CartProductsContext } from "./Root";
export { LineCard }

interface lineCardProps {
    deleteMethod: () => void;
    editMethod: () => void; 
    key: number;
    title: string;
    img: string;
    price: number;
    quantity: number;
    id: number;

}

function LineCard({deleteMethod, editMethod, key, title, img, price, quantity, id} : lineCardProps){
    const [edit, setEdit] = useState(false);
    const [quant, setQuant] = useState(quantity);
    const {cartProducts, addToCart, removeFromCart} = useContext(CartProductsContext);


    let ownProductObj = {
        id: id,
        title: title,
        img: img,
        price: price,
        quantity: quantity,
    }

    const handleEdit = (e) => {
        if(e.target.classList.contains("edit")){
            editMethod(ownProductObj, ["quantity", quant]);
        }
        setEdit(!edit);

    }

    const handleInputChange = (e) => {
        setQuant(e.target.value);
    }

    const handleDelete = (e) => {
        removeFromCart(ownProductObj);
    }


    return (
        <div id={id} key={key} className="card flex flex-row card-compact max-h-32 w-full bg-base-100 shadow-xl p-4 justify-center items-center">
            <figure className="size-fit">
                <img src={(img ||"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg") } alt="" className="min-w-[20%] max-w-[20%]"/>
            </figure>
            <div className="card-body max-w-[80%] min-w-[80%] flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2 max-w-[50%] min-w-[50%]">
                        <h2 className="card-title text-xs">title: {(title.slice(0, 15) + "...")}</h2>
                        <span className="text-xs font-semibold">price: {(price * quant).toFixed(2)}$</span>
                        {!edit && <span className="text-xs font-semibold">quantity: {quant}</span>}
                        {edit && (<input data-testid="quantityInput" type="number" defaultValue={quant} onChange={handleInputChange} className="w-16"/>)}
                    </div>
                    <div className="flex gap-2 justify-center">
                        <Button text="edit" className={"max-w-10 " + (edit ? "edit" : "")} onClick={handleEdit} />
                        <Button text="remove" className="max-w-14 btn-outline btn-warning" onClick={handleDelete}/>
                    </div>
                </div>
            </div>
        </div>
    )
}