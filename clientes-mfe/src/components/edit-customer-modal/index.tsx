import Modal from "../../components/modal";
import { EditCustomerModalContent } from "./styles";
import type { IClient } from "../../types";

interface IEditCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedClient: IClient | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditCustomerModal = ({ isOpen, onClose, selectedClient, onSubmit }: IEditCustomerModalProps) => {
    return (
        <Modal className="modal-edit-customer" isOpen={isOpen} onClose={onClose}>
            <EditCustomerModalContent>
                <h2>Editar Cliente</h2>
                {selectedClient && (
                    <form onSubmit={onSubmit}>
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
    );
};

export default EditCustomerModal;
