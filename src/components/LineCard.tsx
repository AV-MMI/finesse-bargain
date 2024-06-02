import { useContext, useState } from "react";
import { Button } from "./Button";
import { CartProductsContext } from "./Root";
export { LineCard }

function LineCard({deleteMethod, key, title, img, price="100", quantity="2", id=0}){
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
            ownProductObj = {...ownProductObj, quantity: quant};
            removeFromCart(ownProductObj);
            addToCart(ownProductObj);
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
            <div className="card-body">
                <div className="flex items-center gap-4">
                    <div className="w-fit max-w-fit flex flex-col gap-2">
                        <h2 className="card-title text-xs">title: {(title.slice(0, 20) + "...")}</h2>
                        <span className="text-xs font-semibold">price: {price * quant}$</span>
                        {!edit && <span className="text-xs font-semibold">quantity: {quant}</span>}
                        {edit && (<input type="number" defaultValue={quant} onChange={handleInputChange} className="w-16"/>)}
                    </div>
                    <div className="flex gap-2 max-w-[30%] min-w-[30%] justify-center">
                        <Button text="edit" className={"w-10 " + (edit ? "edit" : "")} onClick={handleEdit} />
                        <Button text="X" className="btn-outline btn-warning" onClick={handleDelete}/>
                    </div>
                </div>
            </div>
        </div>
    )
}