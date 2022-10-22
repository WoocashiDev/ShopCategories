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
        case "EDIT_ITEM":
            return [
                ...state, {
                    item: action.item,
                    selectedAttributes: action.attributes,
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