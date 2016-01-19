
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(t){
    t.increments()
    t.string('director')
    t.string('title')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
