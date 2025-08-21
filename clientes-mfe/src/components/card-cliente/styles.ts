import styled from "styled-components";

export const CardClientes = styled("div")`
    width: 100%;
    padding: 1.6rem;
    background-color: white;

    .content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .container-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .client-name {
        font-weight: 700;
        font-size: 1.6rem;
        text-align: center;
    }

    .container-salario,
    .container-company-valuation {
        font-size: 1.4rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
`;
