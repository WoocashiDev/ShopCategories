
export const addItem = (item, selectedAttributes) => {
    return {
        type: 'ADD_ITEM',
        item: item,
        attributes: selectedAttributes
    }
}

export const changeQuantity = (item, quantity) => {
    return {
        type: 'CHANGE_QUANTITY',
        itemName: item,
        quantity: quantity
    }
}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        itemName: item
    }
}
