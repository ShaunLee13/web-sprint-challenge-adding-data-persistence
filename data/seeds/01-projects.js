
exports.seed = function(knex) {
    return knex('projects').insert([
        {name:'Sprint Database', description:'Creating a Sprint Database from scratch'},
        {name:'Making Nightcore'}
      ]);
};
