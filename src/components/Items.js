import React from 'react'
import './Items.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Items=({data})=> {
  return (
    <div className='Items'>
    <div class="container bg-white">
    <div class=" product-item ">
    <div class="product"> <img src={data.img} alt=""/>
        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            <li class="icon"><CompareArrowsIcon></CompareArrowsIcon></li>
            <li class="icon mx-3"><FavoriteBorderIcon></FavoriteBorderIcon></li>
            <li class="icon"><ShoppingBagIcon></ShoppingBagIcon></li>
        </ul>
    </div>
    <div class="tag bg-red">{data.tag}</div>
    <div class="title ">{data.title}</div>
    <div class="d-flex align-content-center justify-content-center"><GradeIcon></GradeIcon><GradeIcon></GradeIcon><GradeIcon></GradeIcon><GradeIcon></GradeIcon><GradeIcon></GradeIcon></div>
    <div class="price">{data.price}</div>
</div>
    </div>
    </div>
  )
}

export default Items;
