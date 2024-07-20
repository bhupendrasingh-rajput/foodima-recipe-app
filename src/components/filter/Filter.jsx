import React, { useState } from 'react';
import style from './Filter.module.css';
import chef from '../../assets/chef.png'
import { dishTypes, mealTypes } from '../../constants/filterHelper'
import useWindowSize from '../../constants/useWindowSize';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Filter = ({ filter, setFilter, clearFilter }) => {
    const [isMealOpen, setIsMealOpen] = useState(false);
    const [isDishOpen, setIsDishOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const width = useWindowSize();
    const isMobileView = width >= 320 && width <= 600;

    const handleChecked = (e) => {
        const { name, checked } = e.target;
        setFilter(prevData => ({
            ...prevData,
            [name]: checked
        }));
    };

    return (
        <div className={style.filter}>
            <header>
                <p>Recipes<img src={chef} alt={chef} /></p>
                {isMobileView && <button onClick={() => setIsFilterOpen(prev => !prev)}>Filters {isFilterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>}
            </header>

            <main style={{ display: (!isFilterOpen && isMobileView) && 'none' }}>
                <span className={style.filterRow}>
                    <p id={style.bold}>Filter by :</p>
                    <p id={style.clearfilter} onClick={clearFilter}>Clear Filter</p>
                </span>
                <span className={style.filterRow}>
                    <p>Contest Winners</p>
                    <input type="checkbox" name="contestWinner" id="contestWinner" checked={filter?.contestWinner || false} onChange={handleChecked} />
                </span>
                <span className={style.filterRow}>
                    <p>Featured</p>
                    <input type="checkbox" name="featured" id="featured" checked={filter?.featured || false} onChange={handleChecked} />
                </span>
                <span className={style.filterRow}>
                    <p>Test Kitchen Approved</p>
                    <input type="checkbox" name="testKitchenApproved" id="testKitchenApproved" checked={filter?.testKitchenApproved || false} onChange={handleChecked} />
                </span>
                {!isMobileView && <br />}
                <span className={style.filterRow}>
                    <p id={style.bold}>Meal</p>
                    <p id={style.add} onClick={() => setIsMealOpen(!isMealOpen)}>+</p>
                </span>
                {isMealOpen && <select name="meal" id="meal" onChange={e => setFilter(prevData => ({ ...prevData, mealType: e.target.value }))}>
                    <option value="" disabled selected hidden>Select Meal Type</option>
                    {mealTypes.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                    )}
                </select>}

                <span className={style.filterRow}>
                    <p id={style.bold}>Dish Type</p>
                    <p id={style.add} onClick={() => setIsDishOpen(!isDishOpen)}>+</p>
                </span>
                {isDishOpen && <select name="dish" id="dish" onChange={e => setFilter(prevData => ({ ...prevData, dishType: e.target.value }))}>
                    <option value="" disabled selected hidden>Select Dish Type</option>
                    {dishTypes.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                    )}
                </select>}
            </main>
        </div >
    )
}

export default Filter