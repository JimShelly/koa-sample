import * as Router from 'koa-router';
import { ideaRoutes } from './idea-route';

export const router: Router = new Router();
const api: Router = new Router();

api.use(ideaRoutes);

router.use('/api', api.routes());
