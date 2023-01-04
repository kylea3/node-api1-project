// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model')

const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({ 
            message: `error getting users`,
            err: err.message
    })
    })
})
      



module.exports = server // EXPORT YOUR SERVER instead of {}
