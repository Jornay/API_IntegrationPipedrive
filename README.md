# API_IntegrationPipedrive




## 📃 **Sobre**

&nbsp;&nbsp;&nbsp;&nbsp;Esse projeto se consiste na criação de uma aplicação que tem a capacidade de realizar a coleta de dodos com status de pedido **Ganho** do aplicativo **Pipedrive** e salvando os mesmos no banco de dados não relacional MongoDB. 

**Obs.:Esse teste não foi finalizado, restou ser produzida a parte referente ao salvamento dos dados na plataforma Bling**
<br>

<br>

---

## 🛠 **Tecnologias utilizadas**

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- ts-node-dev
<br>

--- 

 ## ⚙ **Requisitos**

Esses são os requisitos para rodar o projeto em sua máquina.

- Node.JS >= 10.16.2
- Yarn >= 1.17.3
- NPM >= 6.9.0
<br> 

## **Como testar o projeto** 🔧

Para realizar a reprodução do que o projeto tem a oferecer, é necessário que na sua maquina esteja instalado:

- [NodeJs](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Git](https://git-scm.com/downloads)&nbsp;( Para clonar o repositório )

Primeiro é necessário realizar o clone do repositório em sua maquina através do comando abaixo no seu terminal **git bash**.

`git clone https://github.com/Jornay/API_IntegrationPipedrive.git`

<br>
Após isso, se direcione pelo terminal onde a pasta onde o projeto foi clonada e baixe todas as dependências utilizadas com o simples comando:

`yarn install`

<br>

 -- Por fim será necessário realizar a alteração em alguns campos em específico no projeto para que ele funcione.
Terá que ser alterado o arquivo **routes.ts** colocando a url correspondente ao seu mango de dados MongoDB.


Em seguida será necessário realizar a alteração no arquivo **DealsWithWonController.ts** colocando a sua API Token Correspondendo, localizada no site do Pipedrive.

<br>
<br>
-- Por fim, basta apenas digitar o comando de inicialização do projeto:

`yarn dev`

E ele esta funcionando na sua maquina! 🚀🚀
<br>
<br>

---
### Desenvolvido por [Lucas de Abreu](https://github.com/Jornay) 
