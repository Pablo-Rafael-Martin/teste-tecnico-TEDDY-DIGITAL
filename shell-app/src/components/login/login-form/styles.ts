import styled from "styled-components";

export const LoginForm = styled("form")`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container-input {
        width: 100%;
        height: 6rem;
        max-width: 100%;

        input {
            width: 100%;
            height: 100%;
            font-size: 2.4rem;
            padding: 1.6rem 2rem;
            color: black;
            border: 1px solid var(--grey-2);
            border-radius: 0.5rem;

            @media screen and (max-width: 550px) {
                font-size: 2rem;
            }

            &::placeholder {
                color: var(--grey-1);
                font-size: 100%;
            }
        }
    }

    button {
        color: white;
        background-color: var(--orange-1);
        border-radius: 0.5rem;
        font-weight: 700;
        font-size: 2.4rem;
        padding: 1.5rem 0;
        width: 100%;

        @media screen and (max-width: 550px) {
            font-size: 2rem;
        }
    }
`;
