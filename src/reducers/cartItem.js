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

            if (action.quantity === 0) {
                const leftItems = state.filter((stateitem) => 
                    (stateitem.id !== action.id && stateitem.quantity !== 0)
                )
                return leftItems
            } else {
                const changedItems = state.map(stateitem => {
                    if (stateitem.id === action.id) {
                        return { ...stateitem, quantity: action.quantity }
                    }
                    return stateitem
                })
                return changedItems
            }
            
        default:
            return state
        
        case "CHANGE_ATTRIBUTES":
            const changedItems = state.map(stateitem => {
                if (stateitem.id === action.id) {
                    return {...stateitem, selectedAttributes: action.attributes}
                }
                return stateitem
            })
            return changedItems
    }   
}

export default cartItemReducer