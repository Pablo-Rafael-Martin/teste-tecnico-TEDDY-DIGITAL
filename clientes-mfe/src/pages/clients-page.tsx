import { useEffect, useState } from "react";
import CardCliente from "../components/card-cliente";
import Modal from "../components/modal";
import styled from "styled-components";
import axios from "axios";

interface IClient {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
    createdAt: string;
    updatedAt: string;
}

interface IGetUsersResponse {
    clients: IClient[];
    totalPages: number;
    currentPage: number;
}

interface ICreateCustomer {
    name: string;
    salary: number;
    companyValuation: number;
}

interface IUpdateCustomer {
    name: string;
    salary: number;
    companyValuation: number;
}

interface IHandleUpdateCustomer {
    customerData: IUpdateCustomer;
    id: number;
}

function ClientListPage() {
    function handleCreateCustomer(customerData: ICreateCustomer) {
        axios
            .post("https://boasorte.teddybackoffice.com.br/users", customerData)
            .then((res) => {
                console.log("Usuário criado");
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }

    function handleEditCustomer({ customerData, id }: IHandleUpdateCustomer) {
        axios
            .patch(`https://boasorte.teddybackoffice.com.br/users/${id}`, customerData)
            .then((res) => {
                console.log("Usuário atualizado");
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }

    function handleDeleteCustomer(id: number) {
        axios
            .delete(`https://boasorte.teddybackoffice.com.br/users/${id}`)
            .then((res) => {
                console.log("USUÁRIO DELETADO");
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }

    const handleCreateCustomerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newCustomer: ICreateCustomer = {
            name: formData.get("name") as string,
            salary: Number(formData.get("salary")),
            companyValuation: Number(formData.get("companyValuation")),
        };

        handleCreateCustomer(newCustomer);
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

        handleEditCustomer(prop);
    };

    const handleDeleteCustomerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const id = Number(formData.get("id"));

        handleDeleteCustomer(id);
    };

    const [selectedIds, setSelectedIds] = useState<number[]>(() => {
        const stored = localStorage.getItem("selectedClients");
        return stored ? JSON.parse(stored) : [];
    });

    // 2️⃣ Função para alternar seleção
    const toggleSelect = (id: number) => {
        setSelectedIds((prev) => {
            const newSelected = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
            localStorage.setItem("selectedClients", JSON.stringify(newSelected));
            return newSelected;
        });
    };

    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedClient, setSelectedClient] = useState<any>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOpenModalEdit = (clientData: any) => {
        setSelectedClient(clientData);
        setIsModalEditOpen(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOpenModalDelete = (clientData: any) => {
        setSelectedClient(clientData);
        setIsModalDeleteOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsModalEditOpen(false);
        setSelectedClient(null);
    };

    const handleCloseCreateModal = () => {
        setIsModalCreateOpen(false);
    };

    const handleCloseDeleteModal = () => {
        setIsModalDeleteOpen(false);
    };

    const [pageSize, setPageSize] = useState(16);
    const [currentPage, setCurrentPage] = useState(1);

    const [clientsData, setClientsData] = useState<IGetUsersResponse | null>(null);

    const fetchClients = (page: number, limit: number) => {
        axios
            .get<IGetUsersResponse>(`https://boasorte.teddybackoffice.com.br/users?page=${page}&limit=${limit}`)
            .then((res) => {
                setClientsData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchClients(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const generatePageNumbers = () => {
        const pageNumbers: (number | string)[] = [];
        const totalPages = clientsData?.totalPages || 0;

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage > 2) pageNumbers.push(1);
            if (currentPage > 3) pageNumbers.push("...");

            if (currentPage - 1 > 0) pageNumbers.push(currentPage - 1);
            pageNumbers.push(currentPage);

            if (currentPage + 1 <= totalPages) pageNumbers.push(currentPage + 1);

            if (currentPage < totalPages - 2) pageNumbers.push("...");

            if (!pageNumbers.includes(totalPages)) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <>
            <Page id="page-clients">
                <PageContent>
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
                                    onEditClick={() =>
                                        handleOpenModalEdit({
                                            name: item.name,
                                            salary: item.salary,
                                            companyValuation: item.companyValuation,
                                            id: item.id,
                                        })
                                    }
                                    onDeleteClick={() =>
                                        handleOpenModalDelete({
                                            name: item.name,
                                            id: item.id,
                                        })
                                    }
                                    selectedIds={selectedIds}
                                    toggleSelect={toggleSelect}
                                />
                            </li>
                        ))}
                    </List>

                    <button className="button-create-customer" onClick={() => setIsModalCreateOpen(true)}>
                        Criar cliente
                    </button>

                    <Pagination>
                        {generatePageNumbers().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (typeof page === "number") {
                                        setCurrentPage(page);
                                    }
                                }}
                                className={page === currentPage ? "active" : ""}
                                disabled={page === "..."}
                            >
                                {page}
                            </button>
                        ))}
                    </Pagination>

                    <Modal className="modal-edit-customer" isOpen={isModalEditOpen} onClose={handleCloseEditModal}>
                        <EditCustomerModalContent>
                            <h2>Editar Cliente</h2>
                            {selectedClient && (
                                <form onSubmit={handleEditCustomerSubmit}>
                                    <input type="hidden" name="id" value={selectedClient.id} required />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Digite o nome:"
                                        defaultValue={selectedClient.name}
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="salary"
                                        placeholder="Digite o salário:"
                                        defaultValue={selectedClient.salary}
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="companyValuation"
                                        placeholder="Digite o valor da empresa:"
                                        defaultValue={selectedClient.companyValuation}
                                        required
                                    />

                                    <button type="submit">Editar cliente</button>
                                </form>
                            )}
                        </EditCustomerModalContent>
                    </Modal>

                    <Modal
                        className="modal-create-customer"
                        isOpen={isModalCreateOpen}
                        onClose={handleCloseCreateModal}
                    >
                        <CreateCustomerModalContent>
                            <h2>Criar Cliente</h2>
                            <form onSubmit={handleCreateCustomerSubmit}>
                                <input type="text" name="name" placeholder="Digite o nome:" required />
                                <input type="number" name="salary" placeholder="Digite o salário:" required />
                                <input
                                    type="number"
                                    name="companyValuation"
                                    placeholder="Digite o valor da empresa:"
                                    required
                                />

                                <button type="submit">Criar cliente</button>
                            </form>
                        </CreateCustomerModalContent>
                    </Modal>

                    <Modal
                        className="modal-delete-customer"
                        isOpen={isModalDeleteOpen}
                        onClose={handleCloseDeleteModal}
                    >
                        <DeleteCustomerModalContent>
                            <h2>Excluir Cliente:</h2>
                            {selectedClient && (
                                <>
                                    <p>
                                        Você está prestes a excluir o cliente: <strong>{selectedClient.name}</strong>
                                    </p>
                                    <form onSubmit={handleDeleteCustomerSubmit}>
                                        <input type="hidden" name="id" value={selectedClient.id} required />
                                        <button type="submit">Deletar cliente</button>
                                    </form>
                                </>
                            )}
                        </DeleteCustomerModalContent>
                    </Modal>
                </PageContent>
            </Page>
        </>
    );
}

const CreateCustomerModalContent = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 0.5rem;
            border: 2px solid var(--grey-2);
            color: black;
            font-size: 1.6rem;
            padding: 1.2rem 2rem;

            &::placeholder {
                color: var(--grey-1);
            }
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type="number"] {
            -moz-appearance: textfield;
            appearance: textfield;
        }

        button {
            margin-top: 0.5rem;
            color: white;
            background-color: var(--orange-1);
            border-radius: 0.5rem;
            font-size: 1.4rem;
            font-weight: 700;
            padding: 1.2rem 0;
        }
    }
`;

const EditCustomerModalContent = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 0.5rem;
            border: 2px solid var(--grey-2);
            color: black;
            font-size: 1.6rem;
            padding: 1.2rem 2rem;

            &::placeholder {
                color: var(--grey-1);
            }
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type="number"] {
            -moz-appearance: textfield;
            appearance: textfield;
        }

        button {
            margin-top: 0.5rem;
            color: white;
            background-color: var(--orange-1);
            border-radius: 0.5rem;
            font-size: 1.4rem;
            font-weight: 700;
            padding: 1.2rem 0;
        }
    }
`;

const DeleteCustomerModalContent = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    p {
        font-size: 1.6rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button {
            margin-top: 0.5rem;
            color: white;
            background-color: var(--orange-1);
            border-radius: 0.5rem;
            font-size: 1.4rem;
            font-weight: 700;
            padding: 1.2rem 0;
        }
    }
`;

const List = styled("ul")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const PageContent = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    max-width: 144rem;
    padding-top: 3rem;
    margin: 0 auto;
    width: 100%;

    .button-create-customer {
        width: 100%;
        border: 3px solid var(--orange-1);
        border-radius: 0.5rem;
        background-color: transparent;
        color: var(--orange-1);
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1.2rem 2rem;
    }

    .page-list-first-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .clientes-por-pagina {
            font-size: 1.8rem;

            span {
                display: flex;
                gap: 1rem;
                align-items: center;
            }

            .select-page-size {
                width: 5rem;
                height: auto;
                aspect-ratio: 1.5;
                border: 1px solid var(--grey-2);
                border-radius: 0.5rem;
                padding: 0.2rem 0.5rem;
            }
        }

        .clientes-encontrados {
            font-size: 1.8rem;
        }

        @media screen and (max-width: 500px) {
            flex-direction: column;
            justify-content: initial;
            align-items: flex-start;
            gap: 2rem;

            .clientes-por-pagina {
                order: 1;
            }

            .clientes-encontrados {
                order: 2;
            }
        }
    }
`;

const Page = styled("div")`
    width: 100%;
    min-height: 100vh;
    background-color: var(--grey-3);
    padding: 2rem 2rem;
`;

const Pagination = styled("div")`
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    button {
        padding: 0.9rem 1.4rem;
        font-size: 1.6rem;
        font-weight: 700;
        background-color: transparent;
        border-radius: 0.5rem;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        &.active {
            background-color: var(--orange-1);
            color: white;
        }
    }
`;

export default ClientListPage;
