import * as path from 'path';
// import * as dotenv from 'dotenv';

const ROOT: string = path.resolve(__dirname, '../../');

export const knexfile = {
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