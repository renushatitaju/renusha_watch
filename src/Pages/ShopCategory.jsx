// import React, { useContext, useState } from 'react'
// import "../CSS/ShopCategory.css"

// import Item from '../components/Item/Item'
// const ShopCategory = (props) => {
//   const {all_product}=useContext(ShopContext);
  
//   return (
//     <div className="shopcategory-products">
//         {all_product.map((item,i)=>{
//           if(props.category === item.category){
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//           }else{
//             return null;
//           }
//         })}

  
//       </div>
     


//       )
// }

// export default ShopCategory

import React, { useContext } from "react";
import "../CSS/ShopCategory.css";

import Item from "../components/Item/Item";
import { ShopContext } from "../context/ShopContext"; // ✅ Make sure this path matches your project

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  // ✅ Filter products by category: "mens" or "womens"
  const filteredProducts = all_product.filter(
    (item) => item.category === category
  );

  return (
    <div className="shopcategory">
      <h1 className="shopcategory-title">
        {category === "mens" ? "Men's Collection" : "Women's Collection"}
      </h1>

      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}

        {filteredProducts.length === 0 && (
          <p className="shopcategory-empty">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
