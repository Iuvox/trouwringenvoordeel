const fs = require('fs')
const path = require('path')
const express = require('express')

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

async function createServer(
    root = process.cwd(),
    isProd = process.env.NODE_ENV === 'production'
) {

    const resolve = (p) => path.resolve(__dirname, p)

    const app = express()

    app.use(require('compression')())
    app.use(
        require('serve-static')(resolve('../dist/static'), {
            index: false
        })
    )


    app.use('*', async(req, res) => {
        try {
            const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
            const file = url.pathname === '/' ? 'index' : url.pathname

            res.status(200).set({ 'Content-Type': 'text/html' }).sendFile(resolve(`../dist/static/${file}.html`))
        } catch (e) {
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })

    return { app }
}

if (!isTest) {
    createServer().then(({ app }) =>
        app.listen(3000, () => {
            console.log('http://localhost:3000')
        })
    )
}


// for test use
exports.createServer = createServer