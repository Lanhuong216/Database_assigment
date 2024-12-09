import axiosClient from "./axiosClient";
const orderApi = {
    getAll() {
        const url = '/api/order';
        return axiosClient.get(url)
    }
}

export default orderApi;