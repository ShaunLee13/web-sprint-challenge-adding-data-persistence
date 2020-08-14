const express = require('express')

const Resources = require('./resourceModel')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json({resources})
        })
})

router.post('/', (req,res) => {
    const data = req.body

    if(!data.name){
        res.status(400).json({message:'Please include a resource name.'})
    }
    else{
        Resources.add(data)
            .then(added => {
                res.status(200).json({added})
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({message: error.message})
            })
    }
})

module.exports = router