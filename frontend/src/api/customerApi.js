import axiosClient from "./axiosClient";
const customerApi = {
    getAll() {
        const url = '/api/customer';
        return axiosClient.get(url)
    }
}

export default customerApi;