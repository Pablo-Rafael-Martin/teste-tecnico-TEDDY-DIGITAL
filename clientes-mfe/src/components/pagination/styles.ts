import styled from "styled-components";

export const PaginationContainer = styled("div")`
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    button {
        padding: 0.9rem 1.4rem;
        font-size: 1.6rem;
        font-weight: 700;
        background-color: transparent;
        border-radius: 0.5rem;
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        &.active {
            background-color: var(--orange-1);
            color: white;
        }
    }
`;
