const app = require('express')()
const { readFileSync } = require('fs')
const {resolve} = require('path')

app.get('/:slug', (req, res) => {
    res.sendFile(resolve(`./${req.params.slug}.html`))
})

app.listen(3000, () => {
    console.log('listening')
})