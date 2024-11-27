import React, { createContext } from "react";
import all_products from "../Assets/all_products";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
   
    const contextValue = {all_products};
    return(
        <ShopContext.Provider value={contextValue}>
            {/* {console.log(all_products)
            } */}
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider