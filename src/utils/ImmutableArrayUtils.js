
/**
 *  Normally, a Javascript array's contents are modified using mutative functions like push, unshift, and splice.
 */

export const insertItem = (array, action) => {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ]
};

export const removeItem = (array, action) => {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
};

export const insertItem1 = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
};


export const removeItem1 = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.index, 1);
    return newArray;
};

export const removeItem2 = (array, action) => {
    return array.filter((item, index) => index !== action.index);
};

export const updateObjectInArray = (array, action) => {
    return array.map((item, index) => {
        if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        };
    });
};