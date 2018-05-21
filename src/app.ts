import * as Koa from 'koa';
import * as koaHelmet from 'koa-helmet';
import * as koaLogger from 'koa-logger';
import * as cors from 'kcors';
import * as bodyParser from 'koa-bodyparser';

import { config } from './config';
import { db } from './middleware/db-middleware';
import { router } from './routes';

const app: Koa = new Koa();
   app.use(bodyParser(config.bodyParser));
   app.use(koaLogger);
   app.use(koaHelmet());
   app.use(db(app));
   app.use(cors(config.cors));

app.use(router.routes());

app.listen(config.server.port, config.server.host, () => {
   // tslint:disable-next-line
   console.log(`Listening ${config.server.host}:${config.server.port}`);
});
