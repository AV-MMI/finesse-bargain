import { useState } from "react";
import { Link, useLocation, Outlet} from "react-router-dom";

import { Select } from "./Select";
export { Shop };

function Shop({}){
    const location = useLocation();
    const currTab = (location.state ? location.state.tab : "all");
    const [limit, setLimit] = useState("4");

    
    const handleLimitOpt = (e) => {
        setLimit(e.target.value);
    }

    return (
        <div className="min-h-[90vh] bg-slate-500 pt-4 flex justify-center space-x-6">
            <div className="bg-[#F1F1F1] w-fit text-xl min-h-[80vh] max-h-[80vh]">
                <ul data-testid="navMenu" className="flex flex-col min-h-[80vh] justify-around items-center p-3">
                    <li className={(currTab == "electronics" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/electronics" state={{ tab: "electronics" }} className={"hover:text-orange-400"}>Electronics</Link>
                    </li>
                    <li className={(currTab == "jewelery" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/jewelery" state={{ tab: "jewelery" }} className={"hover:text-orange-400"}>Jewelry</Link>
                    </li>
                    <li className={(currTab == "mens clothing" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/mens clothing" state={{ tab: "men's clothing" }} className={"hover:text-orange-400"}>Men's Clothing</Link>
                    </li>
                    <li className={(currTab == "womens clothing" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/womens clothing" state={{ tab: "women's clothing" }} className={"hover:text-orange-400"}>Women's Clothing</Link>
                    </li>
                    <li className={(currTab == "all" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "")}>
                        <Link to="/shop/" state={{ tab: "all" }} className={"hover:text-orange-400"}>All</Link>
                    </li>
                </ul>
            </div>

            <div className="displayCont flex flex-col items-center bg-[#F1F1F1] min-h-[80vh] max-h-[80vh] w-[80vw]">
                <div className="flex items-center w-36">
                    <h2 className="text-center font-semibold text-xl">Shop</h2>
                    <Select name="limitOptions">
                        <option onClick={handleLimitOpt} defaultValue={4}>4</option>
                        <option onClick={handleLimitOpt} defaultValue={8}>8</option>
                        <option onClick={handleLimitOpt} defaultValue={12}>12</option>
                        <option onClick={handleLimitOpt} defaultValue={16}>16</option>
                    </Select>
                </div>
                <div data-testid="productsDisplay" className=" bg-slate-200 min-w-[100%] max-w-[100%] h-[90%]">
                    <Outlet context={[limit, currTab]} />
                </div>
            </div>
        </div>
    )
}