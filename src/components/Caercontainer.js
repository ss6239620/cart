import React from 'react'
import Cartitem from './Cartitem'
import { useSelector , useDispatch} from 'react-redux'
import { clearCart } from '../features/cart/cartslice';
import { openModal } from '../features/cart/modal/modalslice';

const Caercontainer = () => {
    const {cartitems,price,quantity} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
  if (quantity < 1 ) {
    return(
        <section className='cart'>
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is empty</h4>
            </header>
        </section>
    )
  }
  return(
    <section className='cart'>
<header>
    <h2>your bag</h2>
    <h4>
        {cartitems.map((item)=>{
            return(
                <Cartitem key={item.id}
                {...item} />
            )
        })}
    </h4>
</header>
<footer>

<div className='cart-total'>
    <h4>
        total <span>
        ₹{price}
        </span>
    </h4>
</div>

</footer>
<button className='btn' onClick={()=>dispatch(dispatch(openModal()))}>clear</button>

    </section>
  )
  
}

export default Caercontainer