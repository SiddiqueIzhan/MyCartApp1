import React, { useContext } from 'react'
import Bar from './Bar'
import { CartContext } from './MyCart'

const Content = () => {
  const { item, no_of_items, DeleteAll } = useContext(CartContext)
  let str = `You have ${no_of_items} items in your cart`
    if(item.length > 0){
      return (
        <div className='Content'>
            <h4 id="ht1">Continue Shopping</h4>
            <hr />
            <div className="text1">
              <h4>Shopping Cart</h4>
              <p>{str}</p>
            </div>
            <br />
            {
                  item.map((elem) => 
                  {
                    let {id, image, name, details, price, quantity} = elem
                    return(
                        <Bar key={id} id={id} image={image} name={name} details={details} price={price} quantity={quantity}/>
                    )
                  }
                )
            }
            <button className='delAll' onClick={DeleteAll}>Clear Cart</button>
            </div>
      )
    }
    else{
        return(
          <div className='Content'>
          <h4 id="ht1">Continue Shopping</h4>
          <hr />
          <div className="text1">
            <h4>Shopping Cart</h4>
            <p>{str}</p>
          </div>
          <br />
          </div>
        )
    }
  } 

export default Content