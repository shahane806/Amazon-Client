export const cart = (data) =>{

    return {
        type: "ADD_TO_CART",
        payload: data,
    }
}