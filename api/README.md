# desafio-dev

## ⚠ Requisitos projeto
*  Yarn
*  Docker
*  docker-compose

## 👩🏻‍💻 Como rodar o projeto?

   -  Digite `yarn` na raiz para instalar as dependências do projeto.
   -  Copie os itens do arquivo `.env.example` e crie um arquivo na raiz do projeto chamado `.env` com as suas configurações.
   -  Execute `docker-compose up` para iniciar o postgres em sua máquina.
   -  Crie um banco de dados postgres, preferencialmente com o nome `desafiodev`.
   -  Digite `yarn start` na raiz para executar a api.
   -  Verifique se a mensagem `✨ Back tá on` foi logada em seu console.

## 🌐 Como consumir endpoint da API

   - A porta padrão da API é a `3333`
   - Caso você tenha alterado a porta da API através do `.env`, utilize a porta que configurou

## 📚 Endpoints

   GET `/health`: Endpoint para testar a conexão com a API. Ela retorna a mensagem "OK".

   GET `/transactions`: Lista todas as transações armazenadas no banco.

   GET `/transactions/:id`: Mostra uma transação armazenada no banco a partir do ID (uuid).

   POST `/transactions`: Armazena as transações enviadas no banco, essa endpoint aceita um array de transações.
