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
        
        case "REMOVE_ITEM":
            const leftItems = state.item.filter(stateitem => {
                return stateitem !== action.itemName
                
            })
            delete state.item[action.itemName]
            return state

    
        default:
            return state
    }   
}

export default cartItemReducer