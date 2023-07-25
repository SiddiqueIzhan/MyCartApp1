import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from './MyCart';

const Bar = ({id, image, name, details, price, quantity}) => {
    const { Increment, Decrement, DeleteData } = useContext(CartContext)
  return (
    <div className='Bar'>
        <img src={image} alt="imm" height={60} width={60} id='imm'/>
        <div className="text2">
            <h4>{name}</h4>
            <p>{details}</p>
        </div>
        <div className='IncDec'>
            <div className='Ic'><i id='calc' onClick={() => Decrement(id)}><AiOutlineMinus></AiOutlineMinus></i></div>
            <div><input id="num" type="text" value={quantity} readOnly/></div>
            <div className='Ic'><i id='calc' onClick={() => Increment(id)}><AiOutlinePlus></AiOutlinePlus></i></div>
        </div>
        <p id="rate">${price}</p>
        <button id="delete" onClick={() => DeleteData(id)}><MdDelete /></button>
    </div>
  )
}

export default Bar