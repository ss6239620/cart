import React from 'react'
import { closeModal } from '../features/cart/modal/modalslice'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartslice'
const Modal = () => {
    const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4> remove all items from cart</h4>
       <button type='buttton'
        className='btn confirm-btn' onClick={()=>{
            dispatch(clearCart())
            dispatch(closeModal())
        }}>
              confirm
       </button>
    <button type='button'
    className='btn clear-btn' onClick={()=>{dispatch(closeModal())}}>
        cancel
    </button>
        </div>
    </aside>
  )
}

export default Modal