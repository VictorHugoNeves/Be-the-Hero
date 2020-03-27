const express = require('express');
const cors = require('cors'); 
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 *  Rota / Recurso
 */

/**
 * Método HTTP:
 * 
 * GET: Buscar uma informação back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar um informação no back-end
 * DELETE: Deletar um informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: parâmentros nomeados enviados na rota após "?" (filtros, paginação)
 * Route params: Parâmentros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, postgreSQL, Oracle, Microsoft, SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Drive: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */



