import LoginForm from "./login-form";
import * as S from "./styles";

function LoginPage() {
    return (
        <S.LoginPage className="wrapper-login">
            <main>
                <section className="container-content">
                    <h1 className="page-title">Olá, seja bem vindo!</h1>

                    <div className="container-form">
                        <LoginForm />
                    </div>
                </section>
            </main>
        </S.LoginPage>
    );
}

export default LoginPage;
