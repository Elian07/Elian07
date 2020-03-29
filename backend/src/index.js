const express = require("express");
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(10400);



/**
 * Rota/Recurso
 * 
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 * 
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o símbolo de "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * SQL: MySQL, SQLite, PostSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB...
 * 
 * Driver: SELECT * from users
 * Query Builder: table('users').select('*').where()
 * 
 */