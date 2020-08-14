
exports.seed = function(knex) {
    return knex('tasks').insert([
        {
          project_id:1,
          description:'Build your model',
          notes:"It's important to take your time."
        },
        {
          project_id:1,
          description:'Seed your data',
        },
        {
          project_id:1,
          description:'Create your endpoints',
          notes:"These are important"
        },
        {
          project_id:2,
          description:'Find a song you like',
          notes:"Style of music and beat can make a big difference"
        },
        {
          project_id:2,
          description:'Adjust tempo and/or pitch to find the right mix',
          notes:"Always remember the 24 sweet spot."
        },
        {
          project_id:2,
          description:'Share your creation with others!',
        },
      ]);
};
