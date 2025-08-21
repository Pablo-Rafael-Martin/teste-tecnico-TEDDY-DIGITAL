import styled from "styled-components";

export const LoginPage = styled("div")`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .page-title {
        font-size: 3.6rem;
        text-align: center;
        line-height: 1.2em;

        @media screen and (max-width: 550px) {
            font-size: 3rem;
        }
    }

    .container-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .container-form {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
