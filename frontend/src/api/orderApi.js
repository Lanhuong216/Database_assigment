import axiosClient from "./axiosClient";
const orderApi = {
    getAll() {
        const url = '/api/order';
        return axiosClient.get(url)
    },
    getDefectiveOrder() {
        const url = 'api/order/defective';
        return axiosClient.get(url)
    },
    getExportOrder() {
        const url = 'api/order/export';
        return axiosClient.get(url)
    },
    getSpecificOrder(id) {
        const url = `api/order/${id}`;
        return axiosClient.get(url)
    },
    post(data) {
        const url = `api/order`;
        return axiosClient.post(url, data)
    }
}

export default orderApi;