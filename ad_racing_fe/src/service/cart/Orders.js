import axios from "axios";

export const addToOrders = async (cartDetails, userName) => {
    const result = await axios.post(`http://localhost:8080/api/order/create?userName=${userName}`,cartDetails);
    return result;
}
export const listOrder = async (userName) => {
    const result = await axios.get(`http://localhost:8080/api/order/list-order?userName${userName}`);
    return result;
}