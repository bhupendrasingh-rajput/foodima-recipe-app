import React, { useState } from 'react'
import style from './Header.module.css';
import { CiSearch } from "react-icons/ci";
import useWindowSize from '../../constants/useWindowSize';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import { PiHamburgerFill } from "react-icons/pi";
import background from '../../assets/background.jpeg'

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const screenSize = useWindowSize();
    const mobileView = screenSize <= 600;

    const handleClose = () => {
        setIsDrawerOpen(false);
    }
    return (
        <div className={style.navbar}>
            <span className={style.brand}>Foodima</span>
            {mobileView &&
                <PiHamburgerFill id={style.hamburger} onClick={() => setIsDrawerOpen(true)} />
            }
            {!mobileView &&
                <div className={style.navcontent}>
                    <div className={style.navlinks}>
                        <a href='#'>Shop</a>
                        <a href='#'>Features</a>
                        <a href='#'>Recipes</a>
                        <a href='#'>Hotline</a>
                        <a href='#'><CiSearch /></a>
                    </div>
                    <div className={style.profile}>
                        <span id={style.btn}>{0}</span>
                        <span id={style.login}>Log in</span>
                        <span id={style.btn}>Sign Up</span>
                    </div>
                </div>
            }
            {mobileView && <Drawer open={isDrawerOpen} onClose={handleClose} direction='right' className={style.drawer}>
                <img src={background} alt="background" className={style.drawerimage} />
                <div className={style.navcontent}>
                    <div className={style.navlinks}>
                        <a href='#'>Shop</a>
                        <a href='#'>Features</a>
                        <a href='#'>Recipes</a>
                        <a href='#'>Hotline</a>
                        <a href='#'><CiSearch /></a>
                        <span id={style.btn}>{0}</span>
                        <span id={style.btn}>Log in</span>
                        <span id={style.btn}>Sign Up</span>
                    </div>
                </div>
            </Drawer>}
        </div>
    )
}

export default Header