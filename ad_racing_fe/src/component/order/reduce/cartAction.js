import { getListCartDetail } from "../../../service/cart/CartDetail"
export const getAllCarts = (userName) => async (dispatch) => {
    try {
        const result = await getListCartDetail(userName);
        dispatch({
            type:"GET_ALL_CART",
            payload: result,
        });
    } catch (error) {
        console.log(error);
    }
}