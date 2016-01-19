
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews',function(t){
      t.increments()
      t.integer('movie_id')
      t.string('author')
      t.integer('rating')

  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('reviews')
};
