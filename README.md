# Teste Técnico Teddy

Este é um projeto de micro-frontends que consiste em duas aplicações: `shell-app` (o container da aplicação) e `clientes-mfe` (o micro-frontend de clientes).

## Pré-requisitos

-   [Docker](https://docs.docker.com/get-docker/)
-   [Node.js](https://nodejs.org/en/) (para execução local)
-   [NPM](https://docs.npmjs.com/cli/v7/commands/npm-install) (para execução local)

## Executando com Docker

A maneira mais simples de executar o projeto é com o Docker Compose.

1.  Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2.  Navegue até a raiz do projeto:

    ```bash
    cd teste-teddy-digital
    ```

3.  Execute o Docker Compose:

    ```bash
    docker-compose up -d --build
    ```

A aplicação estará disponível em `http://localhost:5000`. Instale também as dependências em cada MFE para poder ver o codigo sem highlights de erros. Para isso, navegue até a raiz de cada MFE e use npm install.

A proposta desse teste técnico foi desenvolver um sistema com uma tela inicial onde o usuário pode inserir o nome e, em seguida, será redirecionado para uma tela com a lista de todos os clientes cadastrados, onde poderá cadastrar, selecionar, atualizar e excluir clientes, além de uma tela para visualização dos clientes selecionados.

Requisitos do sistema:
● Utilize TypeScript.
● Utilizar React + Vite (versão mais recente).
● Crie uma arquitetura de micro-frontends.
● A aplicação deverá ser responsiva.
● Utilizar Docker para containerizar a aplicação.
● Fazer deploy na Vercel.
