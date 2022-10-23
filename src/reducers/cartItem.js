const cartItemReducer = (state=[], action)=> {
    switch(action.type) {
        case "ADD_ITEM":
            return [
                ...state, {
                    item: action.item,
                    selectedAttributes: action.attributes,
                    quantity: 1
                }
            ]
        case "CHANGE_QUANTITY":
            const changedItem = state.map(stateitem => {     
                if (stateitem.item.name === action.itemName) {
                    return {...stateitem, quantity: action.quantity}
                }
                return stateitem
            })
            return changedItem
        
        default:
            return state
    }   
}

export default cartItemReducer