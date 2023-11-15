import axios from "axios";

export const getListCartDetail = async (userName) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/cart-detail/list?username=${userName}`);
        return result;
    }catch (error){
        console.log(error);
    }
}
 export const createCartDetail = async (quantity,userName, idProduct) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/cart-detail/add?quantity=${quantity}&userName=${userName}&idProduct=${idProduct}`);
        return result;
    } catch (error){
        console.log(error);
    }
 }

 export const deleteCartDetail = async (userName, idProduct) => {
    try {
        const result = await axios.delete(`http://localhost:8080/api/cart-detail/delete-cart-detail?userName=${userName}&idProduct=${idProduct}`);
        return result;
    }catch (error){
        console.log(error);
    }
 }