const cartItemReducer = (state=[], action)=> {
    switch(action.type) {
        case "ADD_ITEM":
            return [
                ...state, {
                    item: action.payload,
                    quantity: 1
                }
            ]
        case "REMOVE_ITEM":
            return state - action.payload
        default:
            return state
    }   
}

export default cartItemReducer