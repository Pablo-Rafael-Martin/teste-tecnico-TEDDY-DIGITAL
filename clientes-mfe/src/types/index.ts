export interface IClient {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
    createdAt: string;
    updatedAt: string;
}

export interface IGetUsersResponse {
    clients: IClient[];
    totalPages: number;
    currentPage: number;
}

export interface ICreateCustomer {
    name: string;
    salary: number;
    companyValuation: number;
}

export interface IUpdateCustomer {
    name: string;
    salary: number;
    companyValuation: number;
}

export interface IHandleUpdateCustomer {
    customerData: IUpdateCustomer;
    id: number;
}
