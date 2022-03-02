import apiClient from "./apiClient";


export const getShipping = (name: string) => apiClient.get(`/finance/shippingComps?name=${name}`);
export const addShip = (name: string) => apiClient.post(`/finance/shippingComps`, { name });
export const updateShip = (id: number, name: string) => apiClient.put(`/finance/shippingComps/${id}`, { name });
export const deleteShip = (id: number) => apiClient.delete(`/finance/shippingComps/${id}`);