import { useOutletContext } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { CartProductsContext } from "./Root";
export { ProductsCards };

function ProductsCards({}){
    const [limit, currTab] = useOutletContext();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const {cartProducts, setCartProducts} = useContext(CartProductsContext);

    const fetchProducts = async (url, limit=false, category=false) => {
        try {
            const response = await fetch(url + (category !== false ? `/category/${category}` : "") + (limit !== false ? `?limit=${limit}` : ""))
            const data = await response.json();
            setData(data);
            
        } catch (error) {
            setError(error.message);
        }
    } 

    useEffect(()=>{
        let canFetch = true;
        if(canFetch){
            if(currTab == "all"){
                fetchProducts("https://fakestoreapi.com/products", limit);
            } else {
                fetchProducts("https://fakestoreapi.com/products", limit, currTab);
            }
        }

        return () => {
            canFetch = false;
        }
    }, [currTab, limit]);

    return (
        <div className="flex p-4 justify-start flex-wrap overflow-y-scroll gap-4 h-full">
            {
                data &&
                data.map((obj) => <Card cb={{cartProducts, setCartProducts}} key={obj.id} id={obj.id} title={obj.title} img={obj.image} price={obj.price} quantity={1} />)
            }
            {
                error &&
                <h2 className="text-2xl text-red-500">{error} Try later!</h2>
            }
        </div>
        );
}