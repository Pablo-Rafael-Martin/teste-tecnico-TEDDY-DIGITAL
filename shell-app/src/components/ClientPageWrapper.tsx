import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ClientListPage from "clientes_mfe/ClientListPage"; // Assuming this import path works

const ClientPageWrapper = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const authenticated = location.state?.authenticated || false;
    const userName = location.state?.userName || "";

    useEffect(() => {
        if (!authenticated) {
            navigate("/");
        }
    }, [authenticated, navigate]);

    return authenticated ? <ClientListPage authenticated={authenticated} userName={userName} /> : null;
};

export default ClientPageWrapper;
