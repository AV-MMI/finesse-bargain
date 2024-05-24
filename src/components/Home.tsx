import { Link, Navigate } from "react-router-dom";
export { Home };

function Home({}){
    return (
        <div className="bg-slate-500 min-h-[90vh] flex justify-center items-center">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4">
                    <div className="size-52 border-2 bg-white flex justify-center items-center font-semibold text-xl">
                        <Link to="/shop/electronics" state={{tab: "E"}}><h2>Electronics</h2></Link>
                    </div>
                    <div className="size-52 border-2 bg-white flex justify-center items-center font-semibold text-xl">
                        <Link to="/shop/jewelry"><h2>Jewelry</h2></Link>
                        </div>
                </div>

                <div className="flex flex-row space-x-4">
                    <div className="size-52 border-2 bg-white flex justify-center items-center font-semibold text-xl">
                        <Link to="/shop/mens-clothing"><h2>Men's Clothing</h2></Link>
                    </div>
                    <div className="size-52 border-2 bg-white flex justify-center items-center font-semibold text-xl">
                        <Link to="/shop/womens-clothing"><h2>Women's Clothing</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}