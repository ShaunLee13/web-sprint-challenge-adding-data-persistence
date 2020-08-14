const express = require('express')

const Projects = require('./projectModel')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json({projects})
        })
})

router.post('/', (req,res) => {
    const data = req.body

    if(!data.name){
        res.status(400).json({message:'Please include a project name.'})
    }
    else{
        Projects.add(data)
            .then(added => {
                res.status(200).json({added})
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({message:'Error while adding project.'})
            })
    }
})

module.exports = router