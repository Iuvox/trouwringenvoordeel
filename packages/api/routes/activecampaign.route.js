const router = require('express').Router()
const active = require('../controllers/activecampaign.controller')

router.post('/createcontact', active.createContact) 

module.exports = router 