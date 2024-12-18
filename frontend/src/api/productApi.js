import axiosClient from "./axiosClient";
const productApi = {
    getAll() {
        const url = '/api/product';
        return axiosClient.get(url)
    },
    getSupplier() {
        const url = '/api/product/supplier';
        return axiosClient.get(url)
    },
    getInventory() {
        const url = '/api/product/inventory';
        return axiosClient.get(url)
    },
    getProduct(element) {
        const url = `/api/product/${element}`;
        return axiosClient.get(url)
    }
}

export default productApi;