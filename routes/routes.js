let express = require('express')
let router = express.Router()
// routes so you are able to access the /api
router.get('/', function (req,res,next) {
    res.json({'message' : 'hello world!'})
})

module.exports = router