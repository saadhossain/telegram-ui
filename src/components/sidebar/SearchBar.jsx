import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import TelegramMenus from '../menus/TelegramMenus';
import MenuIcon from '@mui/icons-material/Menu';

const SearchBar = () => {
    const [isSearchedFocused, setIsSearchedFocused] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'telegram-menu-popover' : undefined;
    return (
        <div className='flex gap-2 items-center sticky top-0 bg-white dark:bg-darkBg py-2'>
            <button
                aria-describedby={id} variant="contained" onClick={handleClick}
                className={`p-2 ${anchorEl !== null && 'bg-ltHover dark:bg-darkHover rounded-full'}`}
            >
                {
                    isSearchedFocused ? <FaArrowLeft className='w-5 h-5 text-[#A4AEB6]' /> : <MenuIcon fontSize='medium' className={`text-[#A4AEB6]`} />
                }
            </button>
            <form className='flex gap-4 items-center rounded-full px-4 py-3 w-full h-12 bg-ltHover dark:bg-darkHover'>
                <FaSearch className='w-5 h-5 text-[#A4AEB6]' />
                <input type="text" name="search" id="search" placeholder='Search' className='w-full h-10 bg-ltHover dark:bg-darkHover focus:outline-none text-gray-900 dark:text-white text-lg' />
            </form>
            <TelegramMenus
                id={id}
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        </div>
    );
};

export default SearchBar;
