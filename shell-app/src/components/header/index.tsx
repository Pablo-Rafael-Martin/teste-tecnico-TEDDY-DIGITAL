import { useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./sidebar";
import * as S from "./styles";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    const { userName } = location.state || {};

    const [isSidebarOpen, setIsSidebarOpen] = useState("");

    return (
        <S.Header
            style={{
                display: currentPath === "/" ? "none" : "flex",
            }}
        >
            <Sidebar currentPage={currentPath} className={isSidebarOpen} />

            <div className="wrapper-content">
                <div className="container-left">
                    <div
                        className="container-hamburguer"
                        onClick={() => (isSidebarOpen === "open" ? setIsSidebarOpen("") : setIsSidebarOpen("open"))}
                    >
                        <button className="button-hamburguer">
                            <img src="/images/icon-hamburguer.svg" />
                        </button>
                    </div>

                    <div className="container-logo">
                        <button className="website-logo">
                            <img src="/images/website-logo.png" alt="Teddy Open Finance" />
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="container-main-links">
                        <li>
                            <button className={`link-clients ${currentPath === "/clientes" ? "active" : ""}`}>
                                Clientes
                            </button>
                        </li>
                        <li>
                            <button
                                className={`link-selected-clients ${
                                    currentPath === "/clientes-selecionados" ? "active" : ""
                                }`}
                            >
                                Clientes selecionados
                            </button>
                        </li>
                        <li>
                            <button className="link-sair">Sair</button>
                        </li>
                    </ul>
                </nav>

                <div className="container-right">
                    Olá, <b>{userName}</b>
                </div>
            </div>
        </S.Header>
    );
}

export default Header;
