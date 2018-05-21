"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koaHelmet = require("koa-helmet");
const koaLogger = require("koa-logger");
const cors = require("kcors");
const bodyParser = require("koa-bodyparser");
const config_1 = require("./config");
const db_middleware_1 = require("./middleware/db-middleware");
const routes_1 = require("./routes");
const app = new Koa();
app.use(bodyParser(config_1.config.bodyParser));
app.use(koaLogger);
app.use(koaHelmet());
app.use(db_middleware_1.db(app));
app.use(cors(config_1.config.cors));
app.use(routes_1.router.routes());
app.listen(config_1.config.server.port, config_1.config.server.host, () => {
    // tslint:disable-next-line
    console.log(`Listening ${config_1.config.server.host}:${config_1.config.server.port}`);
});
//# sourceMappingURL=app.js.map