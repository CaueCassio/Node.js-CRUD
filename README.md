<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>




## Desafio-01 *NodeJS - CRUD (Creat; Read; Update and Delete)


Primeiro desafio #Bootcamp9
- Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.
Rotas POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/id A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/id A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;


## Tecnologias utilizadas:
<ul>
  <li> <a href=https://nodejs.org/en/> NodeJS </a>
  <li></li>
  <a href=https://expressjs.com/pt-br/> Express </a> 
  <li></li>
  <a href=https://yarnpkg.com/lang/en/> Yarn </a> </ul>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

