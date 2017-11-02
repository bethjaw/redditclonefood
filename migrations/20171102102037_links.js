
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('links', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.integer('vote')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('links')
  ])
};
