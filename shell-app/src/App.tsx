import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";

const ClientListPage = React.lazy(() => import("clientes_mfe/ClientListPage"));

const HomePage = () => {
    return <LoginPage />;
};

function App() {
    return (
        <BrowserRouter>
            <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
                <Suspense fallback={<div>Carregando...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/clientes" element={<ClientListPage />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
