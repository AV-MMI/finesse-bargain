import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "./Card";
export { ProductsCards };

function ProductsCards({}){
    const [limit, currTab] = useOutletContext();
    const [data, setData] = useState([]);

    const fetchProducts = async (url, limit=false, category=false) => {
        try {
            const response = await fetch(url + (category !== false ? `/category/${category}` : "") + (limit !== false ? `?limit=${limit}` : ""))
            const data = await response.json();
            setData(data);
            
        } catch (error) {
            console.log(error, 'error')
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
                data.map((obj) => <Card key={obj.id} id={obj.id} title={obj.title} img={obj.image} price={obj.price} quantity={1} /> )
            }
        </div>
        );
}