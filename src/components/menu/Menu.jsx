import React, { lazy, Suspense, useEffect, useState } from 'react';
import style from './Menu.module.css';
import Filter from '../filter/Filter';
import { data } from '../../constants/data';
import { CiSearch } from "react-icons/ci";
const RecipeBox = lazy(() => import('../Recipe/Recipe'));

const Menu = () => {
    const [appData, setAppData] = useState(data);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState({
        contestWinner: null,
        featured: null,
        testKitchenApproved: null,
        mealType: '',
        dishType: ''
    });

    const clearFilter = () => {
        setFilter({
            contestWinner: null,
            featured: null,
            testKitchenApproved: null,
            mealType: '',
            dishType: ''
        });
    }

    const searchData = (query) => {
        let lowerCaseQuery = query.toLowerCase();
        const searchedData = appData.filter(item =>
            item.name.toLowerCase().includes(lowerCaseQuery) ||
            item.description.toLowerCase().includes(lowerCaseQuery) ||
            item.provider.toLowerCase().includes(lowerCaseQuery)
        );
        setAppData(searchedData);
    };

    const sortData = (sortOrder) => {
        const sortedData = [...appData].sort((a, b) => {
            const dateA = new Date(a.dateProvided);
            const dateB = new Date(b.dateProvided);
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
        setAppData(sortedData);
    };

    const filterData = (filter) => {
        const { mealType, dishType, testKitchenApproved, contestWinner, featured } = filter;

        const filteredData = data.filter(item => {
            const matchesMealType = mealType.length === 0 || mealType.includes(item.mealType);
            const matchesDishType = dishType.length === 0 || dishType.includes(item.dishType);
            const matchesTestKitchenApproved = testKitchenApproved === null || item.testKitchenApproved === testKitchenApproved;
            const matchesContestWinner = contestWinner === null || item.contestWinner === contestWinner;
            const matchesFeatured = featured === null || item.featured === featured;

            return matchesMealType && matchesDishType && matchesTestKitchenApproved && matchesContestWinner && matchesFeatured;
        });

        setAppData(filteredData);
    };

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            if (search) {
                searchData(search);
            } else {
                setAppData(data);
            }
        }, 500);
        return () => clearTimeout(debounceSearch);
    }, [search]);

    useEffect(() => {
        filterData(filter);
    }, [filter]);

    useEffect(() => {
        if (sort) {
            sortData(sort);
        }
    }, [sort, appData]);

    return (
        <div className={style.menu} id='menu'>
            <Filter filter={filter} setFilter={setFilter} clearFilter={clearFilter}/>
            <div className={style.container}>
                <div className={style.sort_search_row}>
                    <span className={style.search}>
                        <CiSearch />
                        <input
                            type="text"
                            placeholder='Search recipes and more...'
                            onChange={e => setSearch(e.target.value)}
                        />
                    </span>
                    <span className={style.sort}>
                        <p>Sort by :</p>
                        <select
                            name="sort"
                            id="sort"
                            onChange={(e) => setSort(e.target.value)}
                            value={sort} 
                        >
                            <option value="" hidden disabled>Select</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </span>
                </div>
                <div className={style.recipeContainer}>
                    <Suspense fallback={<>Loading...</>}>
                        {appData.length > 0 ? (
                            appData.map((item, index) => (
                                <RecipeBox key={index} data={item} />
                            ))
                        ) : (
                            <p>No recipes found.</p>
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Menu;
