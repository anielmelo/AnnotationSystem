# AnnotationSystem
Esta API foi desenvolvida para permitir aos usuários criar, editar, listar, filtrar e excluir suas próprias anotações. Além disso, ela possui um sistema de autenticação para garantir a segurança dos dados dos usuários.

## Recursos Disponíveis

A API oferece os seguintes recursos:

- **Autenticação**: Os usuários podem se autenticar para acessar os recursos protegidos da API.
- **Criação de Anotações**: Os usuários autenticados podem criar novas anotações.
- **Edição de Anotações**: Os usuários podem editar suas próprias anotações existentes.
- **Listagem de Anotações**: Os usuários podem listar todas as suas anotações existentes.
- **Filtragem de Anotações**: Os usuários podem filtrar suas anotações com base em critérios específicos.
- **Exclusão de Anotações**: Os usuários podem excluir suas próprias anotações.

## Endpoints da API

### Autenticação

- `POST /api/auth/login`: Endpoint para autenticar um usuário e obter um token de acesso.
- `POST /api/auth/register`: Endpoint para registrar um novo usuário na API.

### Usuários

- `GET /api/user/{id_user}`: Endpoint para obter detalhes de um usuário específico.
- `PUT /api/user/{id_user}`: Endpoint para editar um usuário existente.

### Anotações

- `POST /api/{id_user}/annotations`: Endpoint para criar uma nova anotação.
- `GET /api/{id_user}/annotations`: Endpoint para listar todas as anotações do usuário autenticado.
- `GET /api/annotations/{id}`: Endpoint para obter detalhes de uma anotação específica.
- `PUT /api/annotations/{id}`: Endpoint para editar uma anotação existente.
- `DELETE /api/annotations/{id}`: Endpoint para excluir uma anotação existente.

## Autenticação

A autenticação na API é feita utilizando JSON Web Tokens (JWT). Os usuários devem fazer login para obter um token de acesso, que deve ser incluído nos cabeçalhos das solicitações protegidas.

Para fazer login, os usuários devem enviar uma solicitação POST para `/api/auth/login` com as credenciais de login (email e senha) no corpo da solicitação. Se as credenciais forem válidas, a API retornará um token de acesso.

## Como utilizar

Basta utilizar a URL do deploy da API consumindo através dos endpoints destacados.
[API - Annotation System](https://annotation-system.vercel.app/)
