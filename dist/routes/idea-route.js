"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
const controllers_1 = require("./../controllers");
router.get('/ideas', controllers_1.ctrl.Ideas.get);
exports.ideaRoutes = router.routes();
//# sourceMappingURL=idea-route.js.map