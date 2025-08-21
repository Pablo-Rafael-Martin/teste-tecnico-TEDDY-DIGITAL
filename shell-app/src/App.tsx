import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import ClientPageWrapper from "./components/ClientPageWrapper";
import SelectedClientsPage from "clientes_mfe/SelectedClientsPage";
import Header from "./components/header";

const HomePage = () => {
    return <LoginPage />;
};

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Suspense fallback={<div>Carregando...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/clientes" element={<ClientPageWrapper />} />
                        <Route path="/clientes-selecionados" element={<SelectedClientsPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
