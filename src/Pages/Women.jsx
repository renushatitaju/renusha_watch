import React from 'react'
 import "./Women.css"
import women from '../assets/women'
import Item from '../components/Item/Item'
const Women = () => {
  return (
    <div className='women'>
        <h1>WOMEN COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {women.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Women