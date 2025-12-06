

import React from 'react'
import "./Men.css"
import men from '../assets/men'
import Item from '../components/Item/Item'
const Men = () => {
  return (
    <div className='men'>
        <h1>MEN COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {men.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Men