import { useEffect, useState } from "react";
import CardCliente from "../components/card-cliente";
import CreateCustomerModal from "../components/create-customer-modal";
import EditCustomerModal from "../components/edit-customer-modal";
import DeleteCustomerModal from "../components/delete-customer-modal";
import Pagination from "../components/pagination";
import { fetchClients, createCustomer, updateCustomer, deleteCustomer } from "../api/clients";
import type { IClient, IGetUsersResponse, ICreateCustomer, IUpdateCustomer, IHandleUpdateCustomer } from "../types";
import { Page, PageContent, List } from "./clients-page.styles";

function ClientListPage() {
    const [clientsData, setClientsData] = useState<IGetUsersResponse | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(16);

    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<IClient | null>(null);

    const [selectedIds, setSelectedIds] = useState<number[]>(() => {
        const stored = localStorage.getItem("selectedClients");
        return stored ? JSON.parse(stored) : [];
    });

    const toggleSelect = (id: number) => {
        setSelectedIds((prev) => {
            const newSelected = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
            localStorage.setItem("selectedClients", JSON.stringify(newSelected));
            return newSelected;
        });
    };

    const loadClients = () => {
        fetchClients(currentPage, pageSize)
            .then((res) => {
                setClientsData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        loadClients();
    }, [currentPage, pageSize]);

    const handleCreateCustomerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newCustomer: ICreateCustomer = {
            name: formData.get("name") as string,
            salary: Number(formData.get("salary")),
            companyValuation: Number(formData.get("companyValuation")),
        };
        createCustomer(newCustomer)
            .then(() => {
                loadClients();
                setIsModalCreateOpen(false);
            })
            .catch((error) => console.log(error));
    };

    const handleEditCustomerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const id = Number(formData.get("id"));
        const updatedCustomer: IUpdateCustomer = {
            name: formData.get("name") as string,
            salary: Number(formData.get("salary")),
            companyValuation: Number(formData.get("companyValuation")),
        };
        const prop: IHandleUpdateCustomer = {
            customerData: updatedCustomer,
            id: id,
        };
        updateCustomer(prop)
            .then(() => {
                loadClients();
                setIsModalEditOpen(false);
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteCustomerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const id = Number(formData.get("id"));
        deleteCustomer(id)
            .then(() => {
                loadClients();
                setIsModalDeleteOpen(false);
            })
            .catch((error) => console.log(error));
    };

    const handleOpenModalEdit = (clientData: IClient) => {
        setSelectedClient(clientData);
        setIsModalEditOpen(true);
    };

    const handleOpenModalDelete = (clientData: IClient) => {
        setSelectedClient(clientData);
        setIsModalDeleteOpen(true);
    };

    return (
        <>
            <Page id="page-clients">
                <PageContent className="page-content">
                    <div className="page-list-first-row">
                        <h2 className="clientes-encontrados">
                            <b>{clientsData?.clients.length}</b> clientes encontrados:
                        </h2>
                        <div className="clientes-por-pagina">
                            <span>
                                Clientes por página:
                                <select
                                    className="select-page-size"
                                    value={pageSize}
                                    onChange={(e) => setPageSize(Number(e.target.value))}
                                >
                                    {[4, 8, 12, 16, 20, 24].map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </div>
                    </div>

                    <List>
                        {clientsData?.clients.map((item) => (
                            <li key={item.id}>
                                <CardCliente
                                    id={item.id}
                                    companyValuation={item.companyValuation}
                                    name={item.name}
                                    salary={item.salary}
                                    selectedClientsPage={false}
                                    onEditClick={() => handleOpenModalEdit(item)}
                                    onDeleteClick={() => handleOpenModalDelete(item)}
                                    selectedIds={selectedIds}
                                    toggleSelect={toggleSelect}
                                />
                            </li>
                        ))}
                    </List>

                    <button className="button-create-customer" onClick={() => setIsModalCreateOpen(true)}>
                        Criar cliente
                    </button>

                    {clientsData && (
                        <Pagination
                            currentPage={clientsData.currentPage}
                            totalPages={clientsData.totalPages}
                            onPageChange={setCurrentPage}
                        />
                    )}

                    <CreateCustomerModal
                        isOpen={isModalCreateOpen}
                        onClose={() => setIsModalCreateOpen(false)}
                        onSubmit={handleCreateCustomerSubmit}
                    />
                    <EditCustomerModal
                        isOpen={isModalEditOpen}
                        onClose={() => setIsModalEditOpen(false)}
                        selectedClient={selectedClient}
                        onSubmit={handleEditCustomerSubmit}
                    />
                    <DeleteCustomerModal
                        isOpen={isModalDeleteOpen}
                        onClose={() => setIsModalDeleteOpen(false)}
                        selectedClient={selectedClient}
                        onSubmit={handleDeleteCustomerSubmit}
                    />
                </PageContent>
            </Page>
        </>
    );
}

export default ClientListPage;
