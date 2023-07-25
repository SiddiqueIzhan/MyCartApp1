import React, { createContext, useEffect, useReducer } from 'react'
import Content from './Content'
import Form from './Form'
import { data } from './DataSet'
import { Reducer } from './Reducer'

export const CartContext = createContext();

const init_state = {
    item: data, 
    sum: 0,
    no_of_items: 0
};

const MyCart = () => {
    const [state, dispatch] = useReducer(Reducer, init_state)
    const DeleteData = (id) => {
        return dispatch({
            type:"Remove Item",
            payload: id
        })
    }
    const DeleteAll = () => {
        return dispatch({
            type: "Remove All"
        })
    }
    const Increment = (id) => {
        return dispatch({
            type: "increment",
            payload: id
        })
    }
    const Decrement = (id) => {
        return dispatch({
            type: "decrement",
            payload: id
        })
    }
    useEffect(() => {
       return dispatch({
            type: "Get Total"
       })
    },[state.item])
        return (
            <div className="Container">
                <CartContext.Provider value={{...state, Increment, Decrement, DeleteData, DeleteAll} } >
                    <Content />
                    <Form />
                </CartContext.Provider> 
            </div>
        )
    }


export default MyCart