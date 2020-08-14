
exports.seed = function(knex) {
    return knex('resources').insert([
        {name:'Webcam'},
        {name:'Computer',description:'It does things.'},
        {name:'Software'},
        {name:'Microphone',description:'Allows you to communicate.'}
      ]);
};
