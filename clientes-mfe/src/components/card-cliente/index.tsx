import * as S from "./styles";

interface ICardCliente {
    name?: string;
    salary?: number;
    companyValuation?: number;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

function CardCliente({ name, salary, companyValuation, onEditClick, onDeleteClick }: ICardCliente) {
    return (
        <S.CardClientes>
            <div className="content-wrapper">
                <div className="container-text">
                    {name && <h3 className="client-name">{name}</h3>}

                    <div className="container-salario">
                        <span>Salário:</span>
                        <span>{salary || "-"}</span>
                    </div>

                    <div className="container-company-valuation">
                        <span>Empresa:</span>
                        <span>{companyValuation || "-"}</span>
                    </div>
                </div>

                <div className="row-edit">
                    <button onClick={onEditClick}>Editar</button>
                    <button onClick={onDeleteClick}>Deletar</button>
                    {/* Add delete button here later */}
                </div>
            </div>
        </S.CardClientes>
    );
}

export default CardCliente;
