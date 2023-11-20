const initState = [];

const cartReducer = (carts = initState,action) => {
    const {type, payload} = action;

    switch (type){
        case "GET_ALL_CART":
            console.log(carts)
            return payload;
        default:
            return carts
    }
};
export default cartReducer;