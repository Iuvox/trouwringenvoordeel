const active = require("../models/activecampaign.model")


module.exports.createContact = (req, res) => {
    active.createContact(req.body).then(result => res.send({message: 'added/updated'})).catch(err => res.send(err.data))
}