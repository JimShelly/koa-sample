import * as Knex from 'knex';

exports.seed = function (knex: Knex, promise: Promise<any>) {
    return knex('ideas').del()
    .then(() => {
        return Promise.all([
            knex('ideas').insert([
                { creator: 'Ali', idea: 'A To Do List app!' },
                { creator: 'Ali', idea: 'A Blog!' },
                { creator: 'Ali', idea: 'A calculator' }
            ])
        ]);
    });
};
