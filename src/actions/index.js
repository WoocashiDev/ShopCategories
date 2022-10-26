import { v4 as uuidv4 } from 'uuid';

export const addItem = (item, selectedAttributes) => {
    return {
        type: 'ADD_ITEM',
        item: item,
        attributes: selectedAttributes,
        id: uuidv4()
    }
}

export const changeQuantity = (item, quantity,id) => {
    return {
        type: 'CHANGE_QUANTITY',
        itemName: item,
        quantity: quantity,
        id: id
    }
}

export const removeItem = (newState) => {
    return {
        type: 'REMOVE_ITEM',
        payload: newState
    }
}

export const switchCurrency = (currencyIndex, currencySymbol) => {
    return {
        type: 'SWITCH_CURRENCY',
        payload: {index: currencyIndex, symbol:currencySymbol}
    }
}