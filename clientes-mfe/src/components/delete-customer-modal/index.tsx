import Modal from "../../components/modal";
import { DeleteCustomerModalContent } from "./styles";

interface IDeleteCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedClient: { id: number; name: string } | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DeleteCustomerModal = ({ isOpen, onClose, selectedClient, onSubmit }: IDeleteCustomerModalProps) => {
    return (
        <Modal className="modal-delete-customer" isOpen={isOpen} onClose={onClose}>
            <DeleteCustomerModalContent>
                <h2>Excluir Cliente:</h2>
                {selectedClient && (
                    <>
                        <p>
                            Você está prestes a excluir o cliente: <strong>{selectedClient.name}</strong>
                        </p>
                        <form onSubmit={onSubmit}>
                            <input type="hidden" name="id" value={selectedClient.id} required />
                            <button type="submit">Deletar cliente</button>
                        </form>
                    </>
                )}
            </DeleteCustomerModalContent>
        </Modal>
    );
};

export default DeleteCustomerModal;
