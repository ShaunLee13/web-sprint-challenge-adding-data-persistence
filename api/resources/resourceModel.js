const db = require('../../data/db-config')

module.exports = {
    getResources,
    add
}
// adding resources.
// retrieving a list of resources.

function getResources(id) {
    if(id){
        return db('resources')
            .where({id})
            .first()
    }
    else{
        return db('resources')
    }
}

function add(resource){
    return db("resources")
            .insert(resource)
            .returning("id")
            .then(ids => {
                return getResources(ids[0]);
            })

}
