const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.renderGetAll)

router.post('/', controller.renderPost)

router.get('/:postId', controller.renderPostId)

router.patch('/:postId', controller.renderPostUpdate)

router.delete('/:postId', controller.renderDelete)

module.exports = router;