import { Fragment, useState } from "react";
import { Button } from "./Button";
import { Link, Outlet } from "react-router-dom";

export { Root }

function Root({}){
    let [isDark, darkTheme] = useState(false);
    let [tab, setTab] = useState("Home");
    
    const tabTracker = (e) => {
        setTab(e.target.textContent);
        e.target.classList.add("border-b-orange-600")
    }
    
    return ( 
        <div className="min-h-screen">
            <nav data-theme={ (isDark ? "dark" : "light") } className="max-h-[8vh] min-h-[8vh] flex items-center">
                <ul className="flex items-center w-full justify-around">
                    <div className="siteNavigation flex space-x-2">
                        <li onClick={tabTracker} className={`font-semibold cursor-pointer border-b-2 hover:border-b-orange-500`}><Link to={`/`}>Home</Link></li>
                        <li onClick={tabTracker} className={`font-semibold cursor-pointer border-b-2 hover:border-b-orange-500`}><Link to={`shop/`}>Shop</Link></li>
                        <li onClick={tabTracker} className={`font-semibold cursor-pointer border-b-2 hover:border-b-orange-500`}><Link to={`about/`}>About</Link></li>
                    </div>
                    <div className="siteUtils flex space-x-2 items-center">
                        <li>
                            <Button text="Cart" className="text-cyan-300 hover:border-[#a2d3ff] hover:text-cyan-400 pl-5 pr-5 hover:bg-[#d5ebff] bg-[#EEF7FF] pt-1 pb-1" />
                        </li>
                        <li>
                            <Button text={ (isDark ? "Light Theme" : "Dark Theme")}/>
                        </li>
                    </div>
                </ul>
            </nav>
            <main className="max-h-[92vh] min-h-[92vh] min-w-screen bg-cyan-200">
                <Outlet />
            </main>
        </div>
    )
}