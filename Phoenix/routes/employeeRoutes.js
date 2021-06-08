const express = require('express')
var router = express()
const bodyparser = require('body-parser');

const create = require('../controllers/employeeController')
const view = require('../controllers/employeeController')
const update = require('../controllers/employeeController')
const remove = require('../controllers/employeeController')



router.use(bodyparser.json())
router.post('/employee', create.create)
router.get('/employee', view.view)
router.patch('/employee/:id', update.update)
router.remove('/employee/:id', remove.remove)

module.exports = router