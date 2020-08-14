const db = require('../data/db-config')

module.exports = {
    getProjects,
    add
}
// adding projects.
// retrieving a list of projects.

function getProjects(id) {
    if(id){
        return db('projects')
            .where({id})
            .first()
    }
    else{
        return db('projects')
    }
}

function add(project){
    return db("projects")
            .insert(project)
            .returning("id")
            .then(ids => {
                return getProjects(ids[0]);
            })

}

