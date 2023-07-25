export const Reducer = (state, action) => {
    if(action.type === "Remove Item"){
        return {
            item: state.item.filter((arrItems) => {
                return arrItems.id !== action.payload
            }),
            sum: 0,
            no_of_items: state.no_of_items - 1
        }
    }
    else if(action.type === "Remove All"){
        return {
            ...state,
            item: []
        }
    }
    else if(action.type === "increment"){
        let updateCart = state.item.map((elem) => {
            if(elem.id === action.payload){
                return {...elem, quantity: elem.quantity + 1}
            }
            return elem
        })
        return {...state, item: updateCart}
    }
    else if(action.type === "decrement"){
        let updateCart = state.item.map((elem) => {
            if(elem.id === action.payload){
                if(elem.quantity > 1){
                    return {...elem, quantity: elem.quantity - 1}
                }
                return elem
            }
            return elem
        })
        return {...state, item: updateCart}
    }
    else if(action.type === "Get Total"){
        let {sum, no_of_items} = state.item.reduce((accum, elem) => {
            let {price, quantity} = elem
            accum.sum += (price*quantity)
            accum.no_of_items += quantity
            return accum
        },
        {
            sum: 0,
            no_of_items: 0
        })
        return{...state, sum, no_of_items}
    }
    return state
} 