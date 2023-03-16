const express = require('express')

const router = express.Router()

const capLogsController = require('../controllers/capLogsController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for capLogss, attach it to router along with the controller logic
router.get('/', capLogsController.index)

// Setup a "new" route for creating capLogs
router.get('/new', capLogsController.new)

router.delete('/clear', capLogsController.delete)

// Setup a "delete" route for removing a specific capLogs
router.delete('/:id', capLogsController.delete)

// Setup a "update" route for updating a specific capLogs
router.put('/:id', capLogsController.update)

router.post('/seed', capLogsController.seed)

// Setup a "create" route for adding capLogs data
router.post('/', capLogsController.create)

// Setup a "edit" route for editing a capLogs
router.get('/:id/edit', capLogsController.edit)

// Setup an "show" route for capLogss, attach it to router along with the controller logic
router.get('/:id', capLogsController.show)


module.exports = router;