const currencyReducer = (state={index:0, symbol:"$"}, action)=> {
    switch (action.type) {
        case "SWITCH_CURRENCY":
            return state=action.payload
        default:
            return state
    }   
}

export default currencyReducer