import styled from "styled-components";

export const List = styled("ul")`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;

    @media screen and (max-width: 1260px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr;
    }
`;

export const PageContent = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    max-width: 144rem;
    padding-top: 3rem;
    margin: 0 auto;
    width: 100%;

    .button-clear-customers {
        width: 100%;
        border: 3px solid var(--orange-1);
        border-radius: 0.5rem;
        background-color: transparent;
        color: var(--orange-1);
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1.2rem 2rem;
    }

    .page-list-first-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .clientes-encontrados {
            font-size: 1.8rem;
        }
    }
`;

export const Page = styled("div")`
    width: 100%;
    min-height: 100vh;
    background-color: var(--grey-3);
    padding: 2rem 2rem;
`;
