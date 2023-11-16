import axios from "axios";

export const addToOrders = async (cartDetails, userName) => {
    const result = await axios.post(`http://localhost:8080/api/order/create?userName=${userName}`,cartDetails);
    return result;
}