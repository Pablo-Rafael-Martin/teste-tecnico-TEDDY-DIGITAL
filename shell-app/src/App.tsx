import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import ClientPageWrapper from "./components/ClientPageWrapper";
import Header from "./components/header";

const HomePage = () => {
    return <LoginPage />;
};

function App() {
    return (
        <BrowserRouter>
            <div style={{ fontFamily: "sans-serif" }}>
                <Header />

                <Suspense fallback={<div>Carregando...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/clientes" element={<ClientPageWrapper />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
