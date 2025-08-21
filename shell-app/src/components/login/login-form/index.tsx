import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";

function LoginForm() {
    const navigate = useNavigate();
    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const userName = nameInputRef.current?.value || "";
        navigate('/clientes', { state: { authenticated: true, userName: userName } });
    };

    return (
        <S.LoginForm onSubmit={handleSubmit}>
            <div className="container-input">
                <input
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome:"
                    id="input-name"
                    ref={nameInputRef}
                />
            </div>

            <button type="submit">Entrar</button>
        </S.LoginForm>
    );
}

export default LoginForm;
