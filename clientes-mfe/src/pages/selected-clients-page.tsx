import { useEffect, useState } from "react";
import CardCliente from "../components/card-cliente";
import { fetchClients } from "../api/clients";
import type { IGetUsersResponse } from "../types";
import { Page, PageContent, List } from "./selected-clients-page.styles";

function SelectedClientsPage() {
    const [clientsData, setClientsData] = useState<IGetUsersResponse | null>(null);
    const [selectedIds, setSelectedIds] = useState<number[]>(() => {
        const stored = localStorage.getItem("selectedClients");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        fetchClients(1, 999)
            .then((res) => {
                setClientsData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const toggleSelect = (id: number) => {
        const newSelected = selectedIds.includes(id) ? selectedIds.filter((x) => x !== id) : [...selectedIds, id];

        setSelectedIds(newSelected);
        localStorage.setItem("selectedClients", JSON.stringify(newSelected));
    };

    const clearSelectedClients = () => {
        setSelectedIds([]);
        localStorage.removeItem("selectedClients");
    };

    const selectedClients = clientsData?.clients.filter((client) => selectedIds.includes(client.id)) || [];

    return (
        <>
            <Page id="page-clients">
                <PageContent>
                    <div className="page-list-first-row">
                        <h2 className="clientes-encontrados">Clientes selecionados</h2>
                    </div>

                    <List>
                        {selectedClients.map((item) => (
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
                        ))}
                    </List>

                    <button className="button-clear-customers" onClick={clearSelectedClients}>
                        Limpar clientes selecionados
                    </button>
                </PageContent>
            </Page>
        </>
    );
}

export default SelectedClientsPage;
