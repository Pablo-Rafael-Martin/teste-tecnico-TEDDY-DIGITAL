import { iconClientesSelecionados, iconClients, iconHome } from "../SVGs";
import * as S from "./styles";

interface ISideBar {
    className?: string;
    currentPage?: string;
}

function Sidebar({ className, currentPage }: ISideBar) {
    return (
        <S.Sidebar className={className}>
            <ul>
                <li>
                    <button className={`link-home ${currentPage === "/" ? "active" : ""}`}>
                        {/* <img src="/images/home.svg" alt="Home" /> */}
                        <div className="icon-home" dangerouslySetInnerHTML={{ __html: iconHome }} />
                        Home
                    </button>
                </li>
                <li>
                    <button className={`link-clientes ${currentPage === "/clientes" ? "active" : ""}`}>
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
