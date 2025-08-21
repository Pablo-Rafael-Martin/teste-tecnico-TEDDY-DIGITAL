import * as S from "./styles";

interface ICardCliente {
    id: number;
    name?: string;
    salary?: number;
    companyValuation?: number;
    selectedIds: number[];
    onEditClick: () => void;
    onDeleteClick: () => void;
    toggleSelect: (id: number) => void;
}

function CardCliente({
    id,
    name,
    salary,
    companyValuation,
    onEditClick,
    onDeleteClick,
    selectedIds,
    toggleSelect,
}: ICardCliente) {
    const isSelected = selectedIds.includes(id);

    return (
        <S.CardClientes>
            <div className="content-wrapper">
                <div className="container-text">
                    {name && <h3 className="client-name">{name}</h3>}

                    <div className="container-salario">
                        <span>Salário:</span>
                        <span>{salary}</span>
                    </div>

                    <div className="container-company-valuation">
                        <span>Empresa:</span>
                        <span>{companyValuation}</span>
                    </div>
                </div>

                <div className="row-edit">
                    <button onClick={() => toggleSelect(id)}>
                        {isSelected === true ? <img src={"/images/minus.svg"} /> : <img src={"/images/plus.svg"} />}
                    </button>

                    {!isSelected && (
                        <>
                            <button onClick={onEditClick}>
                                <img src={"/images/pencil.svg"} />
                            </button>

                            <button onClick={onDeleteClick}>
                                <img src={"/images/delete.svg"} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </S.CardClientes>
    );
}

export default CardCliente;
