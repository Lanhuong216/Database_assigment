import axiosClient from "./axiosClient";
const employeeApi = {
    getAll() {
        const url = '/api/post';
        return axiosClient.get(url)
    }
}

export default employeeApi;