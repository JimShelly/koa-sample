import { config } from './../config';
import * as fs from 'fs';
import * as Knex from 'knex';
import { Model } from 'objection';

export const db = function (app: any) {
   if (config.db.client === 'sqlite3') {
      try {
         fs.mkdirSync(config.server.data);
      } catch (err) {
         if (err.code !== 'EEXIST') {
            throw err;
         }
      }
   }

   const db: Knex = require('knex')(config.db);

   // Bind all Models to a knex instance. If you only have one database in
   // your server this is all you have to do. For multi database systems, see
   // the Model.bindKnex method.
   Model.knex(db);

   app.db = db;
   let promise: any;

   if (!config.env.isTest) {
      app.migration = true
      promise = db.migrate.latest()
         .then(() => { app.migration = false }, console.error)
   }

   return async function (ctx: any, next: any) {
      if (ctx.app.migration && promise) {
         await promise;
      }

      return next();
   };
}