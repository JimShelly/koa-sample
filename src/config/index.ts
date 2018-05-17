import * as path from 'path';
import * as _ 'lodash';

const knexfile = require('./knexfile');

const ROOT: string = path.resolve(__dirname, '../');
const NODE_ENV: string = _.defaultTo(process.env.NODE_ENV, 'development');

const isProd: boolean = NODE_ENV === 'production';
const isTest: boolean = NODE_ENV === 'test';
const isDev: boolean = NODE_ENV === 'development';

module.exports = {
   server: {
      port: normalizePort(_.defaultTo(process.env.PORT, '3000')),
      host: _.defaultTo(process.env.HOST, 'localhost'),
      root: ROOT,
      data: path.join(ROOT, '../', '/data')
   },

   env: {
      isDev,
      isProd,
      isTest
   },

   cors: {
      origin: '*',
      exposeHeaders: ['Authorization'],
      credentials: true,
      allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
      allowHeaders: ['Authorization', 'Content-Type'],
      keepHeadersOnError: true
   },

   bodyParser: {
      enableTypes: ['json']
   },

   db: knexfile[NODE_ENV],

   secret: _.defaultTo(process.env.SECRET, 'secret'),

   jwtSecret: _.defaultTo(process.env.JWT_SECRET, 'secret'),

   jwtOptions: {
      expiresIn: '7d'
   }
};

function normalizePort(val: string): number {
   const port: number = parseInt(val, 10);

   if (isNaN(port)) {
      return parseInt(val);
   }

   if (port >= 0) {
      return port;
   }
}