import axios from "axios";
import type { IGetUsersResponse, ICreateCustomer, IHandleUpdateCustomer } from "../types";

const API_URL = "https://boasorte.teddybackoffice.com.br/users";

export const fetchClients = (page: number, limit: number) => {
    return axios.get<IGetUsersResponse>(`${API_URL}?page=${page}&limit=${limit}`);
};

export const createCustomer = (customerData: ICreateCustomer) => {
    return axios.post(API_URL, customerData);
};

export const updateCustomer = ({ customerData, id }: IHandleUpdateCustomer) => {
    return axios.patch(`${API_URL}/${id}`, customerData);
};

export const deleteCustomer = (id: number) => {
    return axios.delete(`${API_URL}/${id}`);
};
