import React from 'react'
import product from '../Assets/data';
import Item from '../components/Item';
import {Link} from 'react-router-dom';
import Title from '../components/Title';

function Kaftan() {
  return (
      
     <div className=''>
         <div className=''>
         <Title header='KAFTAN'/>
        </div>
        <div className="grid grid-cols-4 gap-3 p-2">
        {product.map((item,i)=>{
        return(
         <Item key={i} id={item.id}  image={item.image}/>
        )
      })}
        </div>
        <div className='more'>
        <span  ><Link to='./kaftan' className='btn'>SEE MORE KAFTAN</Link></span>
        </div>
    </div>
  )
}

export default Kaftan