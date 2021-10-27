# REST_API_Desafio_Dock

Manual de execução - desafio-dev-api-rest

Git Repositories:  
Https do repositório. Clonar projeto desafio-dev-api-rest-Dock
https://github.com/RafaelAraujoCv/REST_API_Desafio_Dock.git

Preparar ambiente de desenvolvimento
- NodeJS LTS - https://nodejs.org/en/download/
- MySql - https://www.mysql.com/products/workbench/ 
OBS: Utilizar banco de dados conforme a necessidade do projeto.

NodeJS package:
Importar pacotes, ao projeto após ser clonado do GitHub 
- Express => npm install express
- Body-parser => npm install body-parser
- Nodemon => npm --save-dev install nodemon
- MySQL2 => npm install mysql2
- Sequelize Sequelize-cli Path => npm install sequelize sequelize-cli path


Configurações do SCHEMA Banco de dados:
Caminho: api/config/config.json
"development": {
	"username": "root",
	"password": "root",
	"database": "dock_banking",
	"host": "127.0.0.1",
	"dialect": "mysql"
}

Criandar conexão para gerenciar banco – Migrate
	npx sequelize-cli db:migrate
OBS: Certifique-se de que o banco de dados está criado e arquivo config.json está configurado corretamente.

Popular informações via Script - Seed 
	npx sequelize-cli db:seed:all

Rotas para operações via POSTMAN
Nome do arquivo: TESTE_POSTMAN_DOC_REST_API.json
Ou
Acessar via link: https://www.getpostman.com/collections/8e91b531cd8cc9aca8a1





