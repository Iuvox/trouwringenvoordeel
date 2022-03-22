const fs = require('fs')
const path = require('path')
const express = require('express')

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

const resolve = (p) => path.resolve(__dirname, p)

const isProd = (process.env.NODE_ENV === 'production')

const manifest = isProd ?
    require('../dist/static/ssr-manifest.json') : {}

const app = express()
app.use(require('compression')())

app.use('/tools/assets', express.static(resolve('./dist/assets')))

app.use('/tools', (req, res) => {
    res.set({ 'Content-Type': 'text/html' }).sendFile(resolve('dist/index.html'))
})


app.listen(3000, () => {
    console.log('http://localhost:3000')
})

