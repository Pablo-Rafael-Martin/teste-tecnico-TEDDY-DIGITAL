import styled from "styled-components";

export const Sidebar = styled("div")`
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateX(-100%);
    background-color: white;
    min-height: 100vh;

    &.open {
        transform: translateX(0);
    }

    ul {
        padding: 3.6rem;
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    svg {
        width: 1.8rem;
        height: 1.8rem;
        object-fit: contain;
    }
`;
