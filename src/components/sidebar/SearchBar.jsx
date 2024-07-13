import React, { useState } from 'react';
import { FaBars, FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [isSearchedFocused, setIsSearchedFocused] = useState(false);
    return (
        <div className='flex gap-2 items-center sticky top-0 bg-white py-2'>
            <button>
                {
                    isSearchedFocused ? <FaArrowLeft className='w-5 h-5 text-[#A4AEB6]' /> : <FaBars className='w-5 h-5 text-[#A4AEB6]' />
                }
            </button>
            <form className='flex gap-4 items-center rounded-full px-4 py-3 w-full h-12 bg-ltHover'>
                <FaSearch className='w-5 h-5 text-[#A4AEB6]' />
                <input type="text" name="search" id="search" placeholder='Search' className='w-full h-10 bg-ltHover focus:outline-none text-gray-900 text-lg' />
            </form>
        </div>
    );
};

export default SearchBar;
