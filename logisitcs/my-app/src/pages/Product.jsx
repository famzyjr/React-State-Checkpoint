import React , {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay';
function Product() {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  // const product = all_products.find((e) => e.id === Number(productId))
  const product = all_products.find((e) => e.id === Number(productId))
  return (
    <div>
     <ProductDisplay product={product}/>
     {console.log(all_products)
     }
     {console.log(product)}
     </div>
  )
}

export default Product