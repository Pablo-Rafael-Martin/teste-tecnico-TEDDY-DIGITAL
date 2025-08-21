import { useLocation } from "react-router-dom";
import ClientListPage from "clientes_mfe/ClientListPage";

const ClientPageWrapper = () => {
    const location = useLocation();
    const authenticated = true;
    const userName = location.state?.userName || "";

    return authenticated ? <ClientListPage authenticated={authenticated} userName={userName} /> : null;
};

export default ClientPageWrapper;
