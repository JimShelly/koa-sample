import * as Knex from 'knex';
import { Model, RelationMappings } from 'objection';
const connection = require('../knexfile');


const knexConnection: Knex = Knex(connection);

Model.knex(knexConnection);




module.exports = { Idea, Comment }