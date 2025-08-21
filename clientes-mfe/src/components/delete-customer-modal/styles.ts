import styled from "styled-components";

export const DeleteCustomerModalContent = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    p {
        font-size: 1.6rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button {
            margin-top: 0.5rem;
            color: white;
            background-color: var(--orange-1);
            border-radius: 0.5rem;
            font-size: 1.4rem;
            font-weight: 700;
            padding: 1.2rem 0;
        }
    }
`;
