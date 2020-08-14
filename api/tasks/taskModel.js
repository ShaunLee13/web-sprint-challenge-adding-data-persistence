const db = require('../../data/db-config')

module.exports = {
    getTasks,
    add
}

// adding tasks.
// retrieving a list of tasks. The list of tasks should include the project name and project description.

function getTasks(id) {
    if(id){
        return db('tasks as t')
            .join('projects as p', 't.project_id', '=', 'p.id')
            .select('p.name', 'p.description as project_description','t.*')
            .where({'t.id': id})
            .first()
    }
    else{
        return db('tasks as t')
            .join('projects as p', 't.project_id', '=', 'p.id')
            .select('p.name', 'p.description as project_description','t.*')
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
