import { createSlice } from "@reduxjs/toolkit";
import Cartitems from "../../data";
const initialState ={
    cartitems:Cartitems,
    quantity:5,
    totalprice:0,
    isloading:true
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartitems = []
        },
     removeItem:(state,action)=>{
        const itemid = action.payload
        state.cartitems = state.cartitems.filter( item=> item.id !== itemid)
     },
     increase:(state,action)=>{
        const itemid = action.payload;
      const cartItem = state.cartitems.find((item)=>item.id === itemid)
      cartItem.quantity = cartItem.quantity + 1
     },
     decrease:(state,action)=>{
        const itemid = action.payload;
      const cartItem = state.cartitems.find((item)=>item.id === itemid)
      cartItem.quantity = cartItem.quantity - 1
      state.cartitems = state.cartitems.filter((item)=>item.quantity > 0)
     },
     calculate:(state)=>{
        let tquantity=0;
        let total=0;
        state.cartitems.forEach((item)=>{
            tquantity+=item.quantity;
            total += item.quantity * item.price
        })
        state.quantity = tquantity
        state.price = parseFloat(total).toFixed(2)
     }

    },
})

export default cartSlice.reducer;
export const { clearCart,removeItem,increase,decrease,calculate } = cartSlice.actions