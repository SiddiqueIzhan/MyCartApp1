import React, { useContext } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { CartContext } from './MyCart';
import Validate from './Validate';

const Form = () => {
   let {item, sum, no_of_items} = useContext(CartContext)
   if(item.length > 0){
      return (
         <div className='Form'>
            <div className="headt">
               <h4>Card Details</h4>
               <img src="../Images/Siddique.jpeg" alt="Sid" height={55} style={{borderRadius: "50%"}}/>
            </div>
            <br />
            <form action="" onSubmit={Validate} method='_post'>
            <div className="ctype">
               <p>Card Type</p>
               <div className="cards">
                 <button id="cc"><img src="../Images/MasterCard.png" alt="ms" height={30} width={50} /></button>
                 <button id="cc"><img src="../Images/Rupay.png" alt="ru" height={30} width={50}/></button>
                 <button id="cc"><img src="../Images/visa.png" alt="vi" height={30} width={50}/></button>
                 <button id="cc">See all</button>
               </div>
            </div>
            <div className="inp">
               <label htmlFor="">Name on card</label>
               <input type="text" placeholder='Enter Your Name' name='name' required/>
               <small className='disp_text'>Min 5 Characters</small>
            </div>
            <div className="inp">
               <label htmlFor="">Card Number</label>
               <input type="text" placeholder='1234-5678-9011-1213' name="cr_card" required/>
            </div>
            <div className="inpc">
            <div className="inp">
               <label htmlFor="">Expiration date</label>
               <input type="date" name="exp_date" required/>
            </div>
            <div className="inp">
               <label htmlFor="">CVV</label>
               <input type="password" placeholder='***' name="CVV" required/>
            </div>
            </div>
            <br />
            <div className="inpc2">
                 <div><p id="lf">Subtotal (3 items)</p></div>
                 <div><p id="rt">${sum}</p></div>
                 <div><p id="lf">Shipping</p></div>
                 <div><p id="rt">$4</p></div>
                 <div><p id="lf">Total (tax incl.)</p></div>
                 <div><p id="rt">${(sum)+4}</p></div>
            </div>
            <br />
            <button type='submit' id="subbutton">
               <p>${sum+4}</p>
               <pre>Checkout  <AiOutlineSend /></pre>
            </button>
            </form>
         </div>
       )
   }
   else{
      return(
        <div className='Form'>
            <div className='message'>
            <h1>You have {no_of_items} items in your Cart</h1>
            </div>
        </div>
      )
   }
}

export default Form