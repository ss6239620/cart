import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const { quantity}= useSelector((state)=>state.cart)
  return (<nav>
<div className='nav-center'>
    <h3>redux toolkit</h3>
 <div className='nav-container'>  <p></p>
    <div className='amount-container'>
        <p className='total-amount'>{quantity}</p>
    </div>
</div>
</div> 
</nav>
  )
}

export default Navbar