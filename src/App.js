
import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Caercontainer from './components/Caercontainer';
import { useSelector,useDispatch } from 'react-redux';
import { calculate } from './features/cart/cartslice';
import Modal from './components/Modal';

function App() {
  const {cartitems} = useSelector((state)=> state.cart);
  const { isOpen } = useSelector((state)=>state.modal);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculate())
  },[cartitems])
  return (
    <div className="App">
     {isOpen && <Modal/>}
    <Navbar/>
    <Caercontainer/>
    </div>
  );
}

export default App;
