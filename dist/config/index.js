"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const _ = require("lodash");
const knexfile_1 = require("./knexfile");
const ROOT = path.resolve(__dirname, '../');
const NODE_ENV = _.defaultTo(process.env.NODE_ENV, 'development');
const isProd = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';
const isDev = NODE_ENV === 'development';
exports.config = {
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
    db: knexfile_1.knexfile[NODE_ENV],
    secret: _.defaultTo(process.env.SECRET, 'secret'),
    jwtSecret: _.defaultTo(process.env.JWT_SECRET, 'secret'),
    jwtOptions: {
        expiresIn: '7d'
    }
};
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return parseInt(val);
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
//# sourceMappingURL=index.js.map