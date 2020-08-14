
exports.up = function(knex) {
    return knex.scheme
        .createTable('projects', tbl => {
            tbl.increments('id')

            tbl.string('name', 256).notNullable()
            tbl.string('description')
            tbl.boolean('is_completed').defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments('id')

            tbl.string('name', 256).notNullable().unique()  
            tbl.string('description')
        })
        .createTable('tasks', tbl => {
            tbl.increments('id')

            tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('projects.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
            
            tbl.string('description').notNullable()
            tbl.string('notes')
            tbl.boolean('is_completed').defaultTo(false)
        })
        .createTable('resources_used', tbl => {
            tbl.increments('id')

            tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('projects.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")

            tbl.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('resources.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.scheme
        .dropTableIfExists('resources_used')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
