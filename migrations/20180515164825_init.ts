import * as Knex from "knex";

exports.up = function (knex: Knex): Promise<any> {
   return Promise.all([
      knex.schema.createTable('ideas', table => {
         table.increments('id').primary(),
         table.string('idea'),
         table.string('creator')
      }),

      knex.schema.createTable('comments', table => {
         table.increments('id').primary(),
         table.string('comment'),
         table.string('creator'),
         table.integer('ideas_id').references('ideas.id');
      })
   ]);
};

exports.down = function (knex: Knex): Promise<any> {
   return Promise.all([
      knex.schema.dropTable('ideas'),
      knex.schema.dropTable('comments')
   ]);
};
