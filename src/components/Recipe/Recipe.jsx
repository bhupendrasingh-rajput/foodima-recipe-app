import React from 'react';
import style from './Recipe.module.css';
import { IoMdStarOutline } from "react-icons/io";

const Recipe = ({ data }) => {
  return (
    <div className={style.recipeBox}>
      <img src={data.imgUrl} alt="recipe" loading='lazy' />
      <div className={style.details}>
        <p id={style.name}>{data.name}</p>
        <span>
          <p id={style.rating}><IoMdStarOutline />{data.avgRating} ({data.totalRatings})</p>
          <p id={style.chef}>By {data.provider}</p>
        </span>
        <p id={style.description}>Description : {data.description}</p>
      </div>
    </div>
  )
}

export default Recipe;