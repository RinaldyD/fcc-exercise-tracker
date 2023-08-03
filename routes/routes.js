const express = require('express')
const router = express.Router()

router.post('api/users')
router.get('api/users')

router.post('/api/users/:_id/exercises')
router.get('/api/users/:_id/logs')

router.get('/', (req, res) => {
  res.sendFile(__dirname + '../views/index.html')
})

module.exports = router