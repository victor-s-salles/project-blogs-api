# Project Blogs API

Este é um projeto de API RESTful para um sistema de blogs, construído com Node.js e MySQL. A API permite que usuários criem, leiam, atualizem e excluam blogs e posts.

## Instalação

Antes de tudo, é necessário ter o Node.js e o Docker instalados na sua máquina.

1. Clone este repositório: `git clone https://github.com/victor-s-salles/project-blogs-api.git`
2. Acesse o diretório do projeto: `cd project-blogs-api`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente:
    * Renomeie o arquivo `.env.example` para `.env`
    * Edite o arquivo `.env` com as suas configurações
5. Inicie o servidor: `npm start`

## Endpoints

A API tem os seguintes endpoints:

(O acesso aos endpoints necessitam de um token de autorização)

### Login

* `POST /login`: faz o login de um usuário, gerando um token de autorização JWT

### User

* `POST /user`: cria um novo usuario eum token de autenticação
* `GET /user`: retorna uma lista de todos os usuários
* `GET /user/:id`: retorna um usuário pelo ID
* `DELETE /user/me`: exclui o usuário

### Categories

* `GET /categories`: retorna uma lista de todas as categorias
* `POST /categories`: insere uma nova categoria

### Posts

* `GET /post/search`: retorna uma lista posts a partir de um termo 'q'
* `PUT /post/:id`: edita um post por ID
* `GET /post/:id`: bucar um post por ID
* `DELETE /post/:id`: deleta um post por ID
* `POST /post`: cria um novo post
* `GET /post`: retorna uma lista todos os posts


## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
