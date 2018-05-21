"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./../config");
const fs = require("fs");
const objection_1 = require("objection");
exports.db = function (app) {
    if (config_1.config.db.client === 'sqlite3') {
        try {
            fs.mkdirSync(config_1.config.server.data);
        }
        catch (err) {
            if (err.code !== 'EEXIST') {
                throw err;
            }
        }
    }
    const db = require('knex')(config_1.config.db);
    // Bind all Models to a knex instance. If you only have one database in
    // your server this is all you have to do. For multi database systems, see
    // the Model.bindKnex method.
    objection_1.Model.knex(db);
    app.db = db;
    let promise;
    if (!config_1.config.env.isTest) {
        app.migration = true;
        promise = db.migrate.latest()
            .then(() => { app.migration = false; }, console.error);
    }
    return function (ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx.app.migration && promise) {
                yield promise;
            }
            return next();
        });
    };
};
//# sourceMappingURL=db-middleware.js.map