# Arquitetura utilizada
O projeto foi inteiro desenvolvido utilizando o typescript, optei por usar o SOLID tanto na API quanto no Front-End, o MVC e Repository Pattern somente na API.

# Lista de bibliotecas
## Back-end
### dependencies
- `@prisma/client`: Usado para servir como Models;
- `bcrypt`: Usado para encriptar a senha do usuário;
- `cors`: Utilizado para evitar problemas de CORS no front, por estar trabalhando localhost;
- `express`: Utilizado para estruturar o back-end e montar a API;
- `express-async-errors`: Usado para tratativa de erros;
- `express-validator`: Utilizado para fazer validações dos campos vindos da request;
- `jsonwebtoken`: Usado para autenticar o usuário;

### dev-dependencies
- `@types/bcrypt`: Tipagens do bcrypt;
- `@types/cors`: Tipagens do cors;
- `@types/express`: Tipagens do express;
- `@types/jest`: Tipagens do jest;
- `@types/jsonwebtoken`: Tipagens do jsonwebtoken;
- `@types/node`: Tipagens do node;
- `jest`: Utilizado para realizar testes unitários;
- `prisma`: ORM utilizado;
- `ts-jest`: Utilizado para fazer os teste utilizando typescript;
- `ts-node-dev`: Usado para rodar o servidor para testes;
- `typescript`: Utilizado para tipagem;
- `eslint`: Usado para análise de código;
- `eslint-import-resolver-typescript`: Plugin para permitir importações de arquivos TypeScript,
- `eslint-plugin-import-helpers`: Plugin do eslint para organizar os imports,

## Front-end
### dependencies
- `@mdi/font`: Distribuição e webfonts do Material Design Icons;
- `axios`: Utilizado para fazer as requests;
- `roboto-fontface`: Fonte;
- `vue`: Biblioteca JavasCript;
- `vue-router`: Utilizado para estruturar rotas;
- `vue-sweetalert2`: Usado para disparar alertas de erro e sucesso;
- `vuetify`: Framework UI do projeto;
- `webfontloader`: Utilizado para carregar fontes;

### dev-dependencies
- `@rushstack/eslint-patch`: ;
- `@types/jsdom`: Tipagem jsdom;
- `@types/node`: Tipagem node;
- `@types/webfontloader`: Tipagem webfontloader;
- `@vitejs/plugin-vue`: Plugin do vue para o Vite;
- `@vue/eslint-config-prettier`: Plugin do prettier para vue;
- `@vue/eslint-config-typescript`: Plugin do typescript para vue;
- `@vue/test-utils`: Usado para testes;
- `@vue/tsconfig`: Pre-config do typescript para vue;
- `cypress`: Usado para realizar os testes e2e;
- `eslint`: Usado para análise de código;
- `eslint-plugin-cypress`: Plugin do cypress para o eslint;
- `eslint-plugin-vue`: Plugin do vue para o eslint;
- `jsdom`: Usado para o typescript compilar o DOM;
- `npm-run-all`: Ferramenta para executar vários scripts npm em paralelo ou sequencial;
- `prettier`: Formatador de código;
- `start-server-and-test`: Usado para iniciar o servidor;
- `typescript`: Usado para tipar o projeto;
- `vite`: Compilador do código;
- `vite-plugin-vuetify`: Plugin do Vuetify para o Vite;
- `vue-cli-plugin-vuetify`: Plugin do vuetify para o cli do vue;
- `vue-tsc`: Verificador de tipagem;

# O que você melhoraria se tivesse mais tempo
- Feito a documentação da API utilizando o `swagger`;
- Implementado testes de integração no Back;
- Implementado testes de componentes no Front;
