const db = require('../data/db-config')

module.exports = {
    getTasks,
    add
}

// adding tasks.
// retrieving a list of tasks. The list of tasks should include the project name and project description.

function getTasks(id) {
    if(id){
        return db('tasks')
            .where({id})
            .first()
    }
    else{
        return db('tasks')
    }
}

function add(task){
    return db("tasks")
            .insert(task)
            .returning("id")
            .then(ids => {
                return getTasks(ids[0]);
            })

}
