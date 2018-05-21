"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
// import * as dotenv from 'dotenv';
const ROOT = path.resolve(__dirname, '../../');
exports.knexfile = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.join(ROOT, 'data/dev.sqlite3')
        },
        migrations: {
            directory: path.join(ROOT, 'src/migrations'),
            tableName: 'migrations'
        },
        seeds: {
            directory: path.join(ROOT, 'src/seeds')
        },
        useNullAsDefault: true
    }
};
//# sourceMappingURL=knexfile.js.map