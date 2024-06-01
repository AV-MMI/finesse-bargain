import { useContext, useState } from "react";
import { Button } from "./Button";
import { CartProductsContext } from "./Root";
export { LineCard }

function LineCard({deleteMethod, key, title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde", img, price="100", quantity="2", id=0}){
    const [edit, setEdit] = useState(false);
    const [quant, setQuant] = useState(quantity);
    const {cartProducts, setCartProducts} = useContext(CartProductsContext);

    const handleEdit = (e) => {
        setEdit(!edit);
    }

    const handleInputChange = (e) => {
        setQuant(e.target.value);
    }

    const handleDelete = (e) => {
        const productId = e.target.parentElement.parentElement.getAttribute('id');
        //console.log(cartProducts, 'test')
        //const filteredArr = cartProducts.filter((product) => product['id'] !== productId);
        //console.log(filteredArr, 'sssssssss')
    }


    return (
        <div id={id} key={key} className="card flex flex-row card-compact w-full bg-base-100 shadow-xl p-1 justify-between items-center">
            <figure>
                <img src={(img ||"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg") } alt="" className="w-1/3"/>
                </figure>
            <div className="card-body">
                <h2 className="card-title text-xs">title: {(title.slice(0, 20) + "...")}</h2>
                <span className="text-xs font-semibold">price: {price * quant}$</span>
                <div className="flex items-center gap-4">
                    {!edit && <span className="text-xs font-semibold">quantity: {quant}</span>}
                    {edit && (<input type="number" defaultValue={quant} onChange={handleInputChange}/>)}
                    <Button text="edit" className="w-10" onClick={handleEdit} />
                </div>
            </div>
            <div>
                <Button text="X" className="btn-outline btn-warning" onClick={handleDelete}/>
            </div>
        </div>
    )
}