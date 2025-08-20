import * as S from "./styles";

function LoginForm() {
    return (
        <S.LoginForm>
            <div className="container-input">
                <input type="text" name="name" placeholder="Digite o seu nome:" id="input-name" />
            </div>

            <button type="submit">Entrar</button>
        </S.LoginForm>
    );
}

export default LoginForm;
