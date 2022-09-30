# 🗺 Desafio "Shaw and Partners"

<h1 align="center">
    <img alt="Shaw" src="./assets/logo-shaw-and-partners.png" width="500px" />
    <br/>
   <a href="https://nodejs.org" target="_blank" rel="noopener">Node.JS</a> | <a href="https://vuejs.org/" target="_blank" rel="noopener">Next.JS</a> 
</h1>

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20&%20Made%20by-Juniel-blue?style=flat&logo=Awesome-Lists">
  <img alt="GitHub last commit" src="https://img.shields.io/badge/Made%20with-TypeScript-1f425f.svg?logo=typescript">
</p>

<h3 align="center">
  <a href="#-sobre">Sobre o projeto</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-primeiros-passos">Primeiros passos</a>
  <span> · </span>
  <a href="#-padroes-contribuir">Padrões do projeto</a>
</h3>

## 💭 Sobre

O desafio consiste em uma aplicação onde seja possível listar os usuários do GitHub e ver mais detalhes de cada um deles.

---

## 👨‍💻 Tecnologias Utilizadas

- <a href="https://nodejs.org" target="_blank" rel="noopener">Node.JS</a>;
- <a href="https://nextjs.org/" target="_blank" rel="noopener">Next.JS</a>;
- <a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener">React.JS</a>;
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>.
- <a href="https://expressjs.com/" target="_blank" rel="noopener">Express.JS</a>.
- <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>.

---

## ⁉ Primeiros passos

### 🤔 Pré-requisitos

Para conseguir utilizar o projeto e contribuir nele, basta seguir as instruções abaixo:

- O **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>** é **OBRIGATÓRIO** para executar esse projeto e é **RECOMENDADO** usar a versão LTS.
- O **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** são **OBRIGATÓRIO** para o gerenciamento dos pacotes da aplicação.
- O **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** é **OBRIGATÓRIO** para o controle de versão do projeto.

---

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Juninho-dev/challenge-shaw-and-partners.git
  # Entre na pasta raiz da aplicação
  $ cd challenge-shaw-and-partners
```

2. Iniciando o Projeto

```sh
  # Instale as dependências da aplicação web
  $ cd web && yarn # ou npm install
  # Execute o comando abaixo para iniciar o projeto
  $ yarn dev

  # Instale as dependências da aplicação api
  $ cd api && yarn # ou npm install
  # Execute o comando abaixo para iniciar o servidor
  $ yarn dev
```
---
## 💯 Padrões do projeto

 - SOLID
 - MVC
 - Repository Pattern

 ---
### Documentação da arquitetura
 O projeto esta dividido em:
 - **Controller**
 - **Middleware**
 - **Repositories**
 - **Validators**
 - **Routes**
 - **Helpers**

## Controller
É responsável por intermediar as requisições enviadas pelo Front com as respostas fornecidas pelo Model, processando os dados que o usuário informou e repassando para outras camadas, utilizando a arquitetura MVC.

## Middleware
Responsável por barrar as requisições e manipular as informações. Foi criado o `errorMiddleware` responsável por tratar os erros da aplicação utilizando o padrão `apiMessage`.

## Repositories
Responsável por implementar as regras de negócio no que se refere aos modelos de banco de dados.

## Validators
Responsável por tratar e validar as informações enviadas pelo Front.

## Routes
Responsável por conter todas as rotas da `API`.

## Helpers
Feito para criar funcões que possam ser usadas mais de uma vez no código e tambem manter o código limpo.

---
### 🚧 Lista de Atividades

#### TO DO API
- [x] Create `Repository Pattern` module.
- [x] Use `SOLID` Arquiteture.
- [x] Create `Middleware` errors message.
- [x] Implementing tratative errors.
- [x] Use the default response api.
- [x] Create users routes.
- [ ] Create `swagger` documentation.
- [x] Create unit tests.


#### TO DO WEB
- [x] Install `tailwindcss` and config.
- [x] Create List Users page.
- [x] Create User details page.
- [x] Configure `cypress` and automatized tests.
- [x] Install axios and configure `api.ts`

---

<sup> Feito com 💙 por 👾<a href="https://github.com/juninho-dev/" target="_blank" rel="noopener">Juniel</a> ® 2022.</sup>
