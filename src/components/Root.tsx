import { Fragment, useState } from "react";
import { Button } from "./Button";
import { Link, Outlet } from "react-router-dom";

export { Root }

function Root({}){
    let [isDark, setDarkTheme] = useState(false);
    let [tab, setTab] = useState("Home");
        
    const tabTracker = (e) => {
        setTab(e.target.textContent);
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
                            <Button text="Cart" className="text-cyan-300 hover:border-[#a2d3ff] hover:text-cyan-400 pl-5 pr-5 hover:bg-[#d5ebff] bg-[#EEF7FF] pt-1 pb-1" />
                        </li>
                        <li>
                            <Button disabled text={ (isDark ? "Light Theme" : "Dark Theme")}/>
                        </li>
                    </div>
                </ul>
            </nav>
            <main className="max-h-[90vh] min-h-[90vh] min-w-screen bg-cyan-200">
                <Outlet />
            </main>
        </div>
    )
}