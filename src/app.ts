import { IdeasController } from './controllers/ideas-controller';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Knex from 'knex';
import 'reflect-metadata';
import { useKoaServer } from 'routing-controllers';
import { Model } from 'objection';

const knexConfig: any = require('../knexfile');
// Initialize knex.
export const knex: Knex = Knex(knexConfig.development);

// Create or migrate:
knex.migrate.latest();

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

// Unfortunately the express-promise-router types are borked. Just require():
// const router = require('express-promise-router')();
const app: Koa = new Koa()
   .use(bodyParser);

   useKoaServer(app, {
      routePrefix: '/api/';
      controllers: [__dirname + '/controllers/*.ts']
   });



// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
//
// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
   if (err) {
      res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
   } else {
      next();
   }
});
const port = process.env.PORT || 8641;
const server = app.listen(port, function () {
   console.log('Example app listening at port %s', port);
});