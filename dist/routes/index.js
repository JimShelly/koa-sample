"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const idea_route_1 = require("./idea-route");
exports.router = new Router();
const api = new Router();
api.use(idea_route_1.ideaRoutes);
exports.router.use('/api', api.routes());
//# sourceMappingURL=index.js.map