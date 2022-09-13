const router = require('express').Router()

// Simple GET route
router.get('/', (req, res) => res.render('views/index'))

// Simple POST route
router.post('/', (req, res) => res.json({ ok: true }))

// Add more routes here
// ...

module.exports = router