exports.up = function (knex) {
   return knex.schema

      .createTable('ideas', function(table) {
         table.increments('id').primary(),
         table.string('idea'),
         table.string('creator');
      })

      .createTable('comments', function(table) {
         table.increments('id').primary(),
         table.string('comment'),
         table.string('creator'),
         table.integer('ideas_id').references('ideas.id');
      });
};

exports.down = function (knex) {
   return knex.schema
      .dropTable('ideas')
      .dropTable('comments');

};
