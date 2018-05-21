exports.seed = async function (knex: any) {
    await knex('ideas').del();

    knex('ideas').insert([
        { creator: 'Ali', idea: 'A To Do List app!' },
        { creator: 'Ali', idea: 'A Blog!' },
        { creator: 'Ali', idea: 'A calculator' }
    ]);
};
