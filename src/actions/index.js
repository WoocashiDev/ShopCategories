
export const addItem = (item, selectedAttributes) => {
    return {
        type: 'ADD_ITEM',
        item: item,
        attributes: selectedAttributes
    }
}

export const editItem = (item, selectedAttributes) => {
    return {
        type: 'EDIT_ITEM',
        item: item,
        attributes: selectedAttributes
    }
}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}