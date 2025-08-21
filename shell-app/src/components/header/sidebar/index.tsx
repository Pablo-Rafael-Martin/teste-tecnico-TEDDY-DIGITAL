import { useNavigate } from "react-router-dom";
import { iconClientesSelecionados, iconClients, iconHome } from "../SVGs";
import * as S from "./styles";

interface ISideBar {
    className?: string;
    currentPage?: string;
    userName: string;
}

function Sidebar({ className, currentPage, userName }: ISideBar) {
    const navigate = useNavigate();

    return (
        <S.Sidebar className={className}>
            <ul>
                <li>
                    <button
                        className={`link-home ${currentPage === "/" ? "active" : ""}`}
                        onClick={() => navigate("/", { state: { userName } })}
                    >
                        {/* <img src="/images/home.svg" alt="Home" /> */}
                        <div className="icon-home" dangerouslySetInnerHTML={{ __html: iconHome }} />
                        Home
                    </button>
                </li>
                <li>
                    <button
                        className={`link-clientes ${currentPage === "/clientes" ? "active" : ""}`}
                        onClick={() => navigate("/clientes", { state: { userName } })}
                    >
                        {/* <img src="/images/clientes.svg" alt="Clientes" /> */}
                        <div className="icon-clientes" dangerouslySetInnerHTML={{ __html: iconClients }} />
                        Clientes
                    </button>
                </li>
                <li>
                    <button
                        className={`link-clientes-selecionados ${
                            currentPage === "/clientes-selecionados" ? "active" : ""
                        }`}
                        onClick={() => navigate("/clientes-selecionados", { state: { userName } })}
                    >
                        {/* <img src="/images/clientes-selecionados.svg" alt="Clientes selecionados" /> */}
                        <div
                            className="icon-clientes-selecionados"
                            dangerouslySetInnerHTML={{ __html: iconClientesSelecionados }}
                        />
                        Clientes selecionados
                    </button>
                </li>
            </ul>
        </S.Sidebar>
    );
}

export default Sidebar;
