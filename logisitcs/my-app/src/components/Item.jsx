import React from 'react'
// import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
function Item(props) {
  return (
    <div>
      <h1>{props.header}</h1>
     <div className="transform transition duration-300 hover:scale-[1.05]">
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" className='   w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"' /></Link>
      <div className='item-con'>
       {/* <CiHeart className='icon'/> */}
      <a href="+2348178070418" target='blank' className='border-b-2 border-black'>contact talior</a>
      </div>
     </div>
    </div>
  )
}

export default Item