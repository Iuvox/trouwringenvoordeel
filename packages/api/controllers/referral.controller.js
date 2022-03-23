const referral = require('../models/referral.model')
const ccv = require('../models/ccv.model')
const logger = require('../config/logging')

module.exports.list = (req, res) => {

    referral.checkCode(req.params.code).then(async result => {
        const message = {}
        message.code = req.params.code
        if (result.length === 0) {
            message.error = 'NOT_FOUND'
        }
        const order = await ccv.findOrder(result[0].order_number).catch(err => { console.log(err.data) })
        
        ccv.usedCodes(message.code).then(usedOrders => {
            
            res.send({
                ...message,
                ...result[0],
                usedOrders: usedOrders,
                order: order.data
            })
        }).catch(err => res.send(err) )

    })

}

module.exports.create = (req, res) => {
    const code = (Math.round(Date.now())).toString(36)
    const insert = {
        order_number: req.body.ordernumber_full,
        code: code
    }

    res.send(insert)
}