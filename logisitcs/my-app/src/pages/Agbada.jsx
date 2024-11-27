import React from 'react'
import product_2 from '../Assets/data_2';
import Item from '../components/Item';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
function Agbada() {
  return (
    <div className=''>
        <div className=''>
        <Title header='AGBADA'/>
        </div>
        <div className='grid grid-cols-4 gap-3 p-2'>
        {product_2.map((item,i)=>{
        return <Item key={i} id={item.id} image={item.image} />
      })}
        </div>
        <div className='more'>
        <span><Link to='/Agbada' className='btn'>SEE MORE AGBADA</Link></span>
        </div>
    </div>
  )
}

export default Agbada