import { useLocation, useNavigate } from "react-router-dom";
import ClientListPage from "clientes_mfe/ClientListPage";

const ClientPageWrapper = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const authenticated = true;
    const userName = location.state?.userName || "";

    navigate("/");

    return authenticated ? <ClientListPage authenticated={authenticated} userName={userName} /> : null;
};

export default ClientPageWrapper;
