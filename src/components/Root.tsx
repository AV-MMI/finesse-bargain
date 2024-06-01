import { useState, createContext, useContext } from "react";
import { Button } from "./Button";
import { Link, Outlet } from "react-router-dom";
import { CartModal } from "./CartModal";
export { Root }

export const CartProductsContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

function Root({}){
    let [isDark, setDarkTheme] = useState(false);
    let [tab, setTab] = useState("Home");
    let [cartProducts, setCartProducts] = useState([]);

    const addToCart = (product) => {
        const tempArr = cartProducts;
        let isUnique = true;

        for(let i = 0; i < cartProducts.length; i++){
            if(cartProducts[i].id == product.id){
                isUnique = false;
            }
        }

        if(isUnique){
            setCartProducts(tempArr.concat([product]));
        }
    }

    const removeFromCart = (product) => {
        //obtain id
        // form new arr without the passed one
    }
        
    const tabTracker = (e) => {
        setTab(e.target.textContent);
    }

    const openModal = (e) => {
        document.getElementById('my_modal_1').showModal();
    }
    
    return ( 
        <div className={"min-h-screen" + (isDark ? "dark" : "")} data-theme={(isDark ? "dark" : "light")}>
            <nav className="max-h-[10vh] min-h-[10vh] flex items-center bg-color:">
                <ul className="flex items-center w-full justify-around">
                    <h1 className="text-orange-500 font-semibold">Finesse Bargain</h1>
                    <div className="siteNavigation flex space-x-2">
                        <li onClick={tabTracker} className={`font-semibold cursor-pointer`}><Link to={`/`} className={ (tab == "Home" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "") }>Home</Link></li>
                        <li onClick={tabTracker} className={`font-semibold cursor-pointer`}><Link to={`/shop/`} state={{tab: "all"}}className={ (tab == "Shop" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "") }>Shop</Link></li>
                        <li onClick={tabTracker} className={`font-semibold cursor-pointer`}><Link to={`/about/`} className={ (tab == "About" ? "border-b-2 border-b-orange-500 hover:border-b-orange-600" : "") }>About</Link></li>
                    </div>
                    <div className="siteUtils flex space-x-2 items-center">
                        <li>
                            <CartProductsContext.Provider value={{cartProducts, addToCart, removeFromCart}}>
                                <Button text={"Cart: " + (cartProducts ? cartProducts.length : 0)} onClick={openModal} className="text-cyan-300 hover:border-[#a2d3ff] hover:text-cyan-400 pl-5 pr-5 hover:bg-[#d5ebff] bg-[#EEF7FF] pt-1 pb-1" />
                                <CartModal />
                            </CartProductsContext.Provider>

                        </li>
                        <li>
                            <Button disabled text={ (isDark ? "Light Theme" : "Dark Theme")}/>
                        </li>
                    </div>
                </ul>
            </nav>
            <main className="max-h-[90vh] min-h-[90vh] min-w-screen bg-cyan-200">
                <CartProductsContext.Provider value={{cartProducts, setCartProducts}}>
                    <Outlet />
                </CartProductsContext.Provider>
            </main>
        </div>
    )
}