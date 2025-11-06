import "../main.css";
import { useState } from "react";
import { SEARCH_CATEGORIES } from "../utils/constants";
import searchIcon from "../Nav/imgs/navsearch.png";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    const handleViewAll = (category) => {
        console.log("View all for:", category);
    };

    const handleLinkClick = (link) => {
        console.log("Navigating to:", link);
    };

    return (
        <section className="w-full h-fit py-[10vh] bg-white">
            <div className="w-[60%] ml-[20%] mr-[20%]">
                <div className="text-center mb-[5vh]">
                    <h1 className="text-[52px] text-graytext mb-[2vh]">
                        The most complete Photography resource.
                    </h1>
                    <p className="text-[19px] text-graytext mb-[4vh]">Search our Resources:</p>
                    
                    <form 
                        className="w-full max-w-[600px] mx-auto md:flex items-center justify-center gap-2 mb-[8vh]"
                        onSubmit={handleSearch}
                    >
                        <div className="relative flex-1">
                            <img 
                                src={searchIcon} 
                                alt="Search icon" 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                            />
                            <input 
                                type="text" 
                                className="w-full h-[50px] pl-[45px] pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent" 
                                placeholder="Search..."
                                aria-label="Search resources"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

                <div className="w-full md:flex gap-[4vh] justify-around">
                    <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-[24px] text-purple mb-4 font-bold">
                            {SEARCH_CATEGORIES.BEGINNERS.title}
                        </h2>
                        <ul className="custom-check-list1 mb-4">
                        {SEARCH_CATEGORIES.BEGINNERS.links.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href="#" 
                                    className="text-graytext hover:text-orange transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link);
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="#" 
                        className="text-orange hover:underline transition-all"
                        onClick={(e) => {
                            e.preventDefault();
                            handleViewAll(SEARCH_CATEGORIES.BEGINNERS.title);
                        }}
                    >
                        View All
                    </a>
                </div>

                <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-[24px] text-purple mb-4 font-bold">
                        {SEARCH_CATEGORIES.AMATEURS.title}
                    </h2>
                    <ul className="custom-check-list1 mb-4">
                        {SEARCH_CATEGORIES.AMATEURS.links.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href="#" 
                                    className="text-graytext hover:text-orange transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link);
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="#" 
                        className="text-orange hover:underline transition-all"
                        onClick={(e) => {
                            e.preventDefault();
                            handleViewAll(SEARCH_CATEGORIES.AMATEURS.title);
                        }}
                    >
                        View All
                    </a>
                </div>

                <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-[24px] text-purple mb-4 font-bold">
                        {SEARCH_CATEGORIES.PROFESSIONALS.title}
                    </h2>
                    <ul className="custom-check-list1 mb-4">
                        {SEARCH_CATEGORIES.PROFESSIONALS.links.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href="#" 
                                    className="text-graytext hover:text-orange transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link);
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="#" 
                        className="text-orange hover:underline transition-all"
                        onClick={(e) => {
                            e.preventDefault();
                            handleViewAll(SEARCH_CATEGORIES.PROFESSIONALS.title);
                        }}
                    >
                        View All
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}