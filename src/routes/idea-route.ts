import * as Router from 'koa-router';
const router: Router = new Router();

import { ctrl } from './../controllers';

router.get('/ideas', ctrl.Ideas.get);

export const ideaRoutes: Router.IMiddleware = router.routes();