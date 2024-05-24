import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "./Card";

export { Shop };

function Shop({tab="A"}){
    const location = useLocation();
    const path = location.pathname.match(/(?<=\/shop\/)\w+/)[0];
    const [currTab, setTabs] = useState(path[0].toUpperCase());
    console.log(currTab, '22')

    const tabTracker = (e) => {
        setTabs(e.target.textContent[0]);
    }

    return (
        <div className="min-h-[90vh] bg-slate-500 pt-4 flex justify-center space-x-6">
            <div className="bg-[#F1F1F1] w-fit text-xl min-h-[80vh] max-h-[80vh]">
                <ul data-testid="navMenu" className="flex flex-col min-h-[80vh] justify-around items-center p-3">
                    <li onClick={tabTracker} className={(currTab == "E" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/electronics" className={"hover:text-orange-400"}>Electronics</Link>
                    </li>
                    <li onClick={tabTracker} className={(currTab == "J" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/jewelry" className={"hover:text-orange-400"}>Jewelry</Link>
                    </li>
                    <li onClick={tabTracker} className={(currTab == "M" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/mens-clothing" className={"hover:text-orange-400"}>Men's Clothing</Link>
                    </li>
                    <li onClick={tabTracker} className={(currTab == "W" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/womens-clothing" className={"hover:text-orange-400"}>Women's Clothing</Link>
                    </li>
                    <li onClick={tabTracker} className={(currTab == "A" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/" className={"hover:text-orange-400"}>All</Link>
                    </li>
                </ul>
            </div>

            <div className="displayCont flex flex-col items-center justify-evenly bg-[#F1F1F1] min-h-[80vh] max-h-[80vh] w-[80vw]">
                <div>
                    <h2 className="text-center font-semibold text-xl">Shop</h2>
                    <span></span>
                </div>
                
                <div data-testid="productsDisplay" className="bg-slate-200 min-w-[100%] max-w-[100%] h-[90%] flex p-4 justify-start flex-wrap overflow-y-scroll gap-4">
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