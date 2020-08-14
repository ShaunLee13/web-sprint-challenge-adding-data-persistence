const express = require('express')

const Tasks = require('./taskModel')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json({tasks})
        })
})

router.post('/', (req,res) => {
    const data = req.body

    if(!data.description || !data.project_id){
        res.status(400).json({message:'Please include a task description and the project id.'})
    }
    else{
        Tasks.add(data)
            .then(added => {
                res.status(200).json({added})
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({message:'Error while adding task.'})
            })
    }
})

module.exports = router