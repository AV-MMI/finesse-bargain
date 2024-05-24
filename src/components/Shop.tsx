import { Link } from "react-router-dom";
import { Card } from "./Card";

export { Shop };

function Shop({}){

    return (
        <div className="min-h-[90vh] bg-slate-500 pt-4 flex justify-center space-x-6">
            <div className="bg-[#F1F1F1] w-fit text-xl min-h-[80vh] max-h-[80vh]">
                <ul className="flex flex-col min-h-[80vh] justify-around items-center p-3">
                    <li>
                        <Link to="/shop/electronics" className="hover:text-orange-400">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/shop/jewelry" className="hover:text-orange-400">Jewelry</Link>
                    </li>
                    <li>
                        <Link to="/shop/mens-clothing" className="hover:text-orange-400">Men's Clothing</Link>
                    </li>
                    <li>
                        <Link to="/shop/womens-clothing" className="hover:text-orange-400">Women's Clothing</Link>
                    </li>
                    <li>
                        <Link to="/shop/" className="hover:text-orange-400">All</Link>
                    </li>
                </ul>
            </div>

            <div className="displayCont flex flex-col items-center justify-evenly bg-[#F1F1F1] min-h-[80vh] max-h-[80vh] w-[80vw]">
                <div>
                    <h2 className="text-center font-semibold text-xl">Shop</h2>
                    <span></span>
                </div>
                
                <div className="bg-slate-200 min-w-[100%] max-w-[100%] h-[90%] flex p-4 justify-start flex-wrap overflow-y-scroll gap-4">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}