import React from 'react';
import style from './Banner.module.css';
import banner from '../../assets/banner.png';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.bannerinfo}>
                <span>Recipe Contest</span>
                <p>Recipe contests are like our big, constantly-in-progress dinner party-and you're invited.</p>
                <p style={{fontWeight:'500'}}>How they work <FaArrowRightLong /></p>
            </div>
            <img src={banner} alt="banner_img" />
        </div>
    )
}

export default Banner