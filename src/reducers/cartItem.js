const cartItemReducer = (state=[], action)=> {
    switch(action.type) {
        case "ADD_ITEM":
            return [
                ...state, {
                    item: action.item,
                    selectedAttributes: action.attributes,
                    quantity: 1,
                    id: action.id
                }
            ]
        case "CHANGE_QUANTITY":
            const changedItem = state.map(stateitem => {     
                if (stateitem.id === action.id) {
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