## Instalação :fire:

-   `npm i` ou `yarn` no diretório raiz
-   Criar arquivo `.env` na raiz do projeto
-   preencher de acordo com o arquivo `.env.example` no diretório raiz
-   O projeto está utilizando o Mongo Atlas, então caso não queira preencher com os dados de sua conta, poderá usar a padrão no `.env.example`
-   iniciar aplicação: `npm run dev:serve` ou `yarn dev:serve`
-   testar aplicação: `npm run test` ou `yarn test`

## Rotas

| Rota                   | Tipo | Função                                 | Body                                                                                                                                                                       | Estar logado? |
| ---------------------- | ---- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| /login                 | post | logar doutor                           | email: string password: string                                                                                                                                             | false         |
| /account               | get  | mostra dados do doutor logado          | none                                                                                                                                                                       | true          |
| /medical_prescriptions | get  | retorna todas prescrições médicas      | none                                                                                                                                                                       | true          |
| /medicines             | get  | retorna todos medicamentos             | none                                                                                                                                                                       | true          |
| /medicines             | post | cria medicamento                       | name: string, description: string                                                                                                                                          | true          |
| /medical_prescriptions | post | cria prescrição médica (para paciente) | cpf_patient: string name_patient: string birth_patient: date dosage: string frequency_use: string medicines: string (precisa ser o id do medicamento separado por virgula) | true          |
| /doctors               | post | criar um doutor novo                   | name: string email: string password: string crm: number crm_state: string gender : string cpf: string birth: date                                                          | false         |

## Fazer Login

-   Enviar o `email` e `password` para a rota `/login`, ela irá retornar o token no body da response da requisição. Coloque o token no header de cada requisição que necessite estar logado na aplicação

## Techs usadas :octocat:

-   [x] Node.js
-   [x] Mongo
-   [x] Mongoose
-   [x] Celebratejs (validação)
-   [x] Jest (testes)
-   [x] TypeScript
-   [x] JWT
-   [x] Bcryptjs 
-   [x] Prettier e ESLINT
