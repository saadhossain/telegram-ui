import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import TelegramMenus from '../menus/TelegramMenus';
import TemporaryDrawer from '../menus/TgMenusDrawer';

const SidebarHeader = ({isDrawerOpen, setIsDrawerOpen}) => {
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

    //Functionality for Drawer

    const toggleDrawer = (newOpen) => () => {
        setIsDrawerOpen(newOpen);
    };
    const isMobile = useIsMobile();
    const handleOpenMenus = isMobile ? toggleDrawer(true) : handleClick;
    return (
        <>
            <div className='w-full flex gap-2 items-center justify-between sticky top-0 bg-primary md:bg-white dark:bg-darkBg p-2'>
                <div className='flex items-center gap-2'>
                    <button
                        aria-describedby={id} variant="contained"
                        className={`p-2 ${anchorEl !== null && 'bg-ltHover dark:bg-darkHover rounded-full'}`}
                        onClick={handleOpenMenus}
                    >
                        {
                            isSearchedFocused ? <FaArrowLeft className='w-5 h-5 text-[#A4AEB6]' /> : <MenuIcon fontSize='medium' className={`text-white md:text-[#A4AEB6]`} />
                        }
                    </button>
                    <h2 className='md:hidden text-lg font-semibold text-white'>Telegram</h2>
                </div>
                <button className='md:hidden'>
                    <Search className='text-white md:text-[#A4AEB6]' />
                </button>

                {/* Search input for desktop devic */}
                <form className='hidden md:flex gap-4 items-center rounded-full px-4 py-3 w-full h-12 bg-ltHover dark:bg-darkHover'>
                    <Search className='text-[#A4AEB6]' />
                    <input type="text" name="search" id="search" placeholder='Search' className='w-full h-10 bg-ltHover dark:bg-darkHover focus:outline-none text-gray-900 dark:text-white text-lg' />
                </form>
            </div>
            {/* Display Drawer and Popover menu based on device */}
            {
                isMobile ? <TemporaryDrawer
                    isDrawerOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                /> : <TelegramMenus
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />
            }
        </>
    );
};

export default SidebarHeader;
