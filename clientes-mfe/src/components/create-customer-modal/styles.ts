import styled from "styled-components";

export const CreateCustomerModalContent = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 1.6rem;
        font-weight: 700;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 0.5rem;
            border: 2px solid var(--grey-2);
            color: black;
            font-size: 1.6rem;
            padding: 1.2rem 2rem;

            &::placeholder {
                color: var(--grey-1);
            }
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type="number"] {
            -moz-appearance: textfield;
            appearance: textfield;
        }

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
