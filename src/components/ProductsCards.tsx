import { useOutletContext } from "react-router-dom";
import { Card } from "./Card";
export { ProductsCards };

function ProductsCards({}){
    const [limit, currTab] = useOutletContext();
    console.log(limit, currTab, '<---------')
    /*
    //        fetchProducts('https://fakestoreapi.com/products', limit, currTab);

    // return data
    const fetchProducts = async (url, limit=false, category=false) => {
        try {
            const response = await fetch(url + (category !== false ? `/category/${category}` : "") + (limit !== false ? `?limit=${limit}` : ""))
            const data = await response.json();
            setData(data);
            
        } catch (error) {
            console.log(error, 'error')
        }
    } */
    return (
        <div className="flex p-4 justify-start flex-wrap overflow-y-scroll gap-4">
            hi
        </div>
        );
}