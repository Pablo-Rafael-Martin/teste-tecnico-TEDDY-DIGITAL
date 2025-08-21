import styled from "styled-components";

export const Header = styled("header")`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    position: relative;

    .active {
        color: var(--orange-1);

        svg {
            path {
                fill: var(--orange-1);
            }
        }
    }

    .wrapper-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 144rem;
    }

    .container-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
        position: relative;
    }

    nav {
        .container-main-links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3.3rem;
        }

        @media screen and (max-width: 1024px) {
            display: none;
        }
    }

    .container-right {
        font-size: 1.6rem;
    }

    .container-hamburguer {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -5rem;
        width: 2.4rem;
        height: 2rem;

        @media screen and (max-width: 1700px) {
            position: relative;
            top: 0;
            left: 0;
            transform: unset;
        }
    }

    .container-logo {
        width: 10rem;
        height: auto;
        aspect-ratio: 100 / 49;

        button {
            width: 100%;
            height: 100%;
        }
    }

    button {
        cursor: pointer;
        font-size: 1.6rem;
        transition: color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        svg path {
            transition: fill 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
    }

    .button-hamburguer {
        width: 100%;
        height: 100%;
    }
`;
