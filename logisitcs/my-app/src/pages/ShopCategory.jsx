import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item';

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className="headers">
        <h2>{props.header}</h2>
      </div>
     <div className="shopcategory-products">
     {all_products.map((item,i)=>{
      if(props.category === item.category){
        return <Item Key={i} id={item.id} desc={item.desc} image={item.image}/>
      }
      else{
        return null
      }
     })}
     </div>
    </div>
  )
}

export default ShopCategory