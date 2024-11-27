import React from 'react'
function ProductDisplay(props) {
    const {product} = props;
  return (
    <div className='productdisplay'>
     <div className="productdisplay-left">
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
     </div>
     <div className="productdisplay-right">
       <div className="productdisplay-con">
       <h2>{product.desc}</h2>
       </div>
     </div>
    </div>
  )
}

export default ProductDisplay