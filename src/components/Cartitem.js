import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem,increase,decrease } from '../features/cart/cartslice'

const Cartitem = ({ id,title,img,price,quantity }) => {
    const dispatch = useDispatch()
  return (
    <div>
        <article className='cart-item'>
            <img
            src={img}
            alt={title}/>
            <div>
              <h4>  {title}</h4>
                    <h4 className='item-price'>
                       {price} ₹
                    </h4>
               <button className='remove-btn'
               onClick={()=>dispatch(removeItem(id))
            
            }>remove</button> 
            </div>
            <div>
                <button className='btn' onClick={()=>dispatch(increase(id))}>+</button>
                <p className='amount'>{quantity}</p>
                <button className='btn'onClick={()=>dispatch(decrease(id))}>-</button>
            </div>
        </article>
    </div>
  )
}

export default Cartitem