import "../main.css";
import { useState } from "react";
import { NAV_LINKS } from "../utils/constants";
import homeIcon from "./imgs/homenav.png";
import logoImage from "./imgs/navlogo.png";

export default function Nav() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            console.log("Searching for:", searchValue);
        }
    };

    const handleNavClick = (link) => {
        console.log("Navigating to:", link);
    };

    return (
        <nav className='w-[full] h-32 md:flex items-center font-montserrat'>
            <div className='w-[86%] h-20 ml-[7%] mr-[7%]'>
                <div className='w-[full] h-fit md:flex justify-between items-center'>
                    <ul className='w-[fit] md:flex text-transform: uppercase gap-x-[20px] text-[12px] items-center'>
                        <li>
                            <button 
                                onClick={() => handleNavClick('home')}
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                aria-label="Home"
                            >
                                <img 
                                    src={homeIcon} 
                                    alt="Home" 
                                    className='w-[22px] h-[22px]'
                                />
                            </button>
                        </li>
                        {NAV_LINKS.map((link, index) => (
                            <li 
                                key={index}
                                className={`${link.width ? link.width : ''} cursor-pointer hover:text-orange transition-colors duration-200`}
                                onClick={() => handleNavClick(link.label)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleNavClick(link.label);
                                    }
                                }}
                            >
                                {link.label}
                            </li>
                        ))}
                    </ul>

                    <div className='w-[150px] h-[98px] bg-orange md:flex items-center justify-center'>
                        <img 
                            src={logoImage} 
                            alt="Logo" 
                            className='w-[90px] h-[98px]'
                        />
                    </div>

                    <form 
                        className='w-[fit] h-[fit] md:flex items-center'
                        onSubmit={handleSearch}
                    >
                        <input 
                            type="search" 
                            placeholder="Search website..." 
                            className='w-[255px] h-[43px] p-[10px] border-1 border-neutral-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-all'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            aria-label="Search website"
                        />
                        <button 
                            type="submit"
                            className='w-[137px] h-[43px] bg-gray rounded-r-lg text-[14px] hover:bg-orange hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange'
                            aria-label="Submit search"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}