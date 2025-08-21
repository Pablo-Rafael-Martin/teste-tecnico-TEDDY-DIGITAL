import styled from "styled-components";
import CardCliente from "../components/card-cliente";
import { useEffect, useState } from "react";
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

function SelectedClientsPage() {
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

    const [clientsData, setClientsData] = useState<IGetUsersResponse | null>(null);

    const fetchClients = (page = 1, limit = 999) => {
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
        fetchClients(1, 999);
    }, [selectedIds]);

    return (
        <>
            <Page id="page-clients">
                <PageContent>
                    <div className="page-list-first-row">
                        <h2 className="clientes-encontrados">Clientes selecionados</h2>
                    </div>

                    <List>
                        {clientsData?.clients.map((item) => {
                            const isSelected = selectedIds.includes(item.id);

                            if (isSelected)
                                return (
                                    <li key={item.id}>
                                        <CardCliente
                                            id={item.id}
                                            companyValuation={item.companyValuation}
                                            selectedClientsPage={true}
                                            name={item.name}
                                            salary={item.salary}
                                            onEditClick={() => {}}
                                            onDeleteClick={() => {}}
                                            selectedIds={selectedIds}
                                            toggleSelect={toggleSelect}
                                        />
                                    </li>
                                );
                        })}
                    </List>

                    <button
                        className="button-clear-customers"
                        onClick={() => {
                            setSelectedIds([]);
                            localStorage.removeItem("selectedClients");
                        }}
                    >
                        Limpar clientes selecionados
                    </button>
                </PageContent>
            </Page>
        </>
    );
}

const List = styled("ul")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;

    @media screen and (max-width: 1260px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 820px) {
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

    .button-clear-customers {
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

        @media screen and (max-width: 700px) {
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

export default SelectedClientsPage;
