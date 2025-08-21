import Modal from "../../components/modal";
import { CreateCustomerModalContent } from "./styles";

interface ICreateCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateCustomerModal = ({ isOpen, onClose, onSubmit }: ICreateCustomerModalProps) => {
    return (
        <Modal className="modal-create-customer" isOpen={isOpen} onClose={onClose}>
            <CreateCustomerModalContent>
                <h2>Criar Cliente</h2>
                <form onSubmit={onSubmit}>
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
    );
};

export default CreateCustomerModal;
